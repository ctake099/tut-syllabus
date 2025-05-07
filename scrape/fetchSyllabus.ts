import axios from 'axios';
import * as https from 'https';
import { constants } from 'crypto';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import { readFile } from 'fs/promises';

// Scheduleインターフェース: 講義のスケジュール情報を管理
interface Schedule {
    day: string;  // 曜日（例: 月曜日、火曜日）
    period?: number | null;  // 時限（1, 2, 3...）時限がない場合はnull
}

// LectureInfoインターフェース: 講義の詳細情報
export interface LectureInfo {
    subjectName: string;  // 科目名
    instructors: string;  // 担当教員（複数可）
    courseCategory: string;  // 授業科目区分
    courseType: string;  // 授業種別
    timetableCode: string;  // 時間割コード
    semester: string;  // 開講学期
    schedule: Schedule[];  // 開講曜日・時限
    department: string[] | null;  // 対象学科
    grade: number[];  // 対象学年
    credits: number;  // 単位数
    classroom: string | null;  // 教室
    lastUpdated: string;  // 最終更新日
    overview: string;  // 授業概要
    objectives: string;  // 到達目標
    learningOutcomes: string | null;  // ラーニングアウトカム
    teachingMethod: string;  // 授業方法
    notes: string;  // 履修上の注意
    preparation: string;  // 準備学習
    evaluation: string;  // 成績評価方法・基準
    textbook: string;  // 教科書
    referenceMaterials: string | null;  // 参考書
    schedulePlan: string;  // 授業計画
}

// 日本語のカラム名と英語のプロパティ名をマッピング
const keyMap: Record<string, keyof LectureInfo | undefined> = {
    '科目名': 'subjectName',
    '担当教員（所属）': 'instructors',
    '授業科目区分': 'courseCategory',
    '授業種別': 'courseType',
    '時間割コード': 'timetableCode',
    '開講学期': 'semester',
    '開講曜限': 'schedule',
    '対象所属': 'department',
    '対象学年': 'grade',
    '単位数': 'credits',
    '教室': 'classroom',
    '更新日': 'lastUpdated',
    '授業概要': 'overview',
    '到達目標': 'objectives',
    'ラーニング・アウトカムズ (学修到達目標)': 'learningOutcomes',
    '授業方法': 'teachingMethod',
    '履修上の注意': 'notes',
    '準備学習': 'preparation',
    '成績評価方法・基準': 'evaluation',
    '教科書': 'textbook',
    '参考書': 'referenceMaterials',
    '授業計画': 'schedulePlan',
};

// HTMLテーブルからデータを抽出する関数
const extractTableData = ($: cheerio.Root, table: cheerio.Element): Partial<LectureInfo> => {
    const data: Partial<LectureInfo> = {};  // データ格納用オブジェクト

    // テーブル内の各行（trタグ）を反復処理
    $(table).find('tr').each((_, row) => {
        // thタグ（カラム名）とtdタグ（データ）を抽出
        const th = $(row).find('th').text().trim().replace(/\s+/g, ' ');
        let td = $(row).find('td').html()?.trim() || '';
        td = td.replace(/<br\s*\/?>/gi, '\n').replace(/\s+/g, ' ').trim();

        // 日本語のカラム名を英語のフィールド名に変換
        const key = keyMap[th];

        if (key) {  // マッピングが存在する場合のみ処理を行う
            if (td) {
                // schedule（曜日・時限）の処理
                if (key === 'schedule') {
                    const schedules = td.split(",").map(str => str.replace(/\s+/g, ""));
                    const result: Schedule[] = schedules.map(item => {
                        const match = item.match(/^([^\d]+)(\d+)$/);  // 曜日と時限を正規表現で抽出
                        if (match) {
                            const day = match[1];  // 曜日
                            const period = Number(match[2]);  // 時限
                            return { day, period };  // 結果をオブジェクトで返す
                        } else {
                            return { day: "他", period: null };  // フォーマットが不正な場合
                        }
                    });
                    data[key] = result;  // schedule情報を格納

                    // department や instructors の処理（複数の文字列）
                } else if (key === 'department') {
                    (data as any).department = td.split(",").map(str => str.replace(/\s+/g, ""));
                } else if (key === 'instructors') {
                    (data as any).instructors = td.split(",").map(str => str.replace(/\s+/g, ""));
                    // grade（学年）の処理
                } else if (key === 'grade') {
                    data[key] = td.split(",")
                        .map(str => {
                            const match = str.replace(/\s+/g, "").match(/\d+(\.\d+)?/g);
                            return match ? Number(match[0]) : null;  // 数字を取得、なければnull
                        })
                        .filter(val => val !== null);  // nullを除外

                    // credits（単位数）の処理
                } else if (key === 'credits') {
                    data[key] = Number(td);  // 単位数を数字に変換

                    // その他のデータはそのまま格納
                } else {
                    data[key] = td;
                }
            } else {
                // tdが空の場合はnullを設定
                // ts-ignoreを使って型エラーを無視
                // @ts-ignore
                data[key] = null;
            }
        }
    });

    return data;  // 最終的なデータを返す
};

// メイン処理: 特定のURLから情報を抽出し、ファイルに保存する
const main = async (url: string) => {
    try {
        // HTTPSリクエストのためのエージェント設定
        const agent = new https.Agent({
            minVersion: "TLSv1.2",  // TLS 1.2以上
            rejectUnauthorized: false,  // 証明書検証を無効化
            secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT,  // 古いサーバーとの互換性を持たせる
        });

        // Axiosを使ってURLからHTMLデータを取得
        const { data: html } = await axios.get(url, {
            httpsAgent: agent,  // 作成したエージェントを使用
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(html);  // HTMLをパース

        // 必要なテーブル要素を取得
        const basicTable = $('#tabs-1 table.syllabus-normal').get(0);
        const detailTable = $('#tabs-2 table.syllabus-normal').get(0);

        if (!basicTable || !detailTable) {
            throw new Error('必要なテーブルが見つかりませんでした');
        }

        // テーブルからデータを抽出
        const basicData = extractTableData($, basicTable);
        const detailData = extractTableData($, detailTable);

        // LectureInfoオブジェクトにデータを統合
        const lectureInfo: LectureInfo = {
            ...basicData,
            ...detailData,
        } as LectureInfo;

        // JSONとしてファイルに保存
        await fs.promises.writeFile(`data/lectureData/${basicData.timetableCode}.json`, JSON.stringify(lectureInfo, null, 2), 'utf8');
        console.log(`data/lectureData/${basicData.timetableCode}.json に保存しました`);

    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
};

const loadSyllabusUrls = async (): Promise<string[]> => {
    const file = await readFile('data/syllabus_urls.json', 'utf-8');
    return JSON.parse(file);
};
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


const runAll = async () => {
    const syllabusUrls = await loadSyllabusUrls();
  
    console.log(`処理開始（全 ${syllabusUrls.length} 件）`);
  
    for (let i = 0; i < syllabusUrls.length; i++) {
      const url = syllabusUrls[i];
      console.log(`[${i + 1}/${syllabusUrls.length}] ${url}`);
      await main(url);       // 講義データを取得して保存
      await delay(1000);     // 1秒待機
    }
  
    console.log('全ての処理が完了しました');
  };

// ダミーデータの処理開始
runAll();