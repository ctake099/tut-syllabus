import axios from 'axios';
import * as https from 'https';
import { constants } from 'crypto';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

// Scheduleインターフェース: 講義のスケジュール情報を管理
interface Schedule {
    day: string | null;  // 曜日（例: 月曜日、火曜日）
    period?: number | null;  // 時限（1, 2, 3...）時限がない場合はnull
}

// LectureInfoインターフェース: 講義の詳細情報
// nullが確認された項目:department,classroom,learningOutcomes,referenceMaterials
export interface LectureInfo {
    subjectName: string;  // 科目名
    instructors: string[];  // 担当教員（複数可）
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

// ダミーURLリスト：各URLから授業情報を取得
const dummyDatas = [
    "https://kyo-web.teu.ac.jp/syllabus/2024/BT_11040B1_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2024/BT_11040B1_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/BT_B10201_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/CS_11050C01_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/MS_M000519_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/ES_K100601_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/ESE7_K000605_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/ESE7_K703901_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/X1_L9110101_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/DS_R204D_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HS_T3300_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2024/X3_GE000401_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2024/GF_GF1004_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/GH_GH1008_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/BT_B21001_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH2_U2204_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH2_W2206_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH6_U60122_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/MS_11051M08_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/MS_11051M21_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH5_W5406_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/CS_C40260_ja_JP.html"
];

//インターフェースを初期化する関数
// nullが確認された項目:department,classroom,learningOutcomes,referenceMaterials
function createDefaultObject(): Partial<LectureInfo>{
    const result: LectureInfo = {
        subjectName: "",
        instructors: [],
        courseCategory: "",
        courseType: "",
        timetableCode: "",
        semester: "",
        schedule: [],
        department: null,
        grade: [],
        credits: 0,
        classroom: null,
        lastUpdated: "",
        overview: "",
        objectives: "",
        learningOutcomes: null,
        teachingMethod: "",
        notes: "",
        preparation: "",
        evaluation: "",
        textbook: "",
        referenceMaterials: null,
        schedulePlan: "",
      }

    return result;
}

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
                            return { day: "他", period: null };
                        }
                    });
                    data[key] = result;  // schedule情報を格納

                    // instructors の処理（複数の文字列とカッコ内消去）
                } else if (key === 'instructors') {
                    data[key] = td.split(",").map(str => str.replace(/\([^()]*\)/g, "").replace(/\s+/g, ""));

                    // departmentの処理（複数の文字列）
                } else if (key === 'department') {
                    data[key] = td.split(",").map(str => str.replace(/\s+/g, ""));

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
            ...createDefaultObject(),
            ...basicData,
            ...detailData,
        } as LectureInfo;

        // JSONとしてファイルに保存
        await fs.promises.writeFile(`DummyDatas/${basicData.timetableCode}.json`, JSON.stringify(lectureInfo, null, 2), 'utf8');
        console.log(`✅ DummyDatas/${basicData.timetableCode}.json に保存しました`);

    } catch (error) {
        console.error('❌ エラーが発生しました:', error);
    }
};

// ダミーデータURLを反復処理して並列実行
const runAll = async () => {
    await Promise.all(dummyDatas.map(dummyUrl => main(dummyUrl)));
    console.log('✅ 全ての処理が完了しました');
};

// ダミーデータの処理開始
runAll();
