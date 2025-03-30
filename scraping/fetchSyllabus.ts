import axios from 'axios';
import * as https from 'https';
import { constants } from 'crypto';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

// --- 型定義 ---
export interface LectureInfo {
  subjectName: string;
  instructors: string;
  courseCategory: string;
  courseType: string;
  timetableCode: string;
  semester: string;
  schedule: string[];
  department: string[];
  grade: string[];
  credits: number;
  classroom: string;
  lastUpdated: string;
  overview: string;
  objectives: string;
  learningOutcomes: string;
  teachingMethod: string;
  notes: string;
  preparation: string;
  evaluation: string;
  textbook: string;
  referenceMaterials: string,
  schedulePlan: string;
}

// --- 日本語→英語のマッピング ---
const keyMap: Record<string, keyof LectureInfo> = {
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
  //参考書の追加
  '参考書': 'referenceMaterials',
  '授業計画': 'schedulePlan',
};

//ダミーデータ群
const dummyDatas = ["https://kyo-web.teu.ac.jp/syllabus/2025/BT_B10201_ja_JP.html",
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
                    "https://kyo-web.teu.ac.jp/syllabus/2025/CS_C40260_ja_JP.html",]


// --- テーブルからデータを抽出 ---
const extractTableData = ($: cheerio.Root, table: cheerio.Element): Partial<LectureInfo> => {
  const data: Partial<LectureInfo> = {};

  $(table).find('tr').each((_, row) => {
    const th = $(row).find('th').text().trim().replace(/\s+/g, ' ');
    let td = $(row).find('td').html()?.trim() || '';
    td = td.replace(/<br\s*\/?>/gi, '\n').replace(/\s+/g, ' ').trim();
    //keyの設定（日本語から英語に）
    const key = keyMap[th];

    if (key && td) {
      //schedule,department,gradeの処理（string[]の処理）
      if ((key == 'schedule') || (key == 'department') || (key == 'grade')) {
        data[key] = td.split(",").map(str => str.replace(/\s+/g, ""));
      } else if (key == 'credits') {
      //credits（numberの処理）
        data[key] = Number(td);
      } else {
      //それ以外の処理（stringの処理）
        data[key] = td;
      }
    }
  });

  return data;
};

// --- メイン処理 ---
const main = async (url: string = "https://kyo-web.teu.ac.jp/syllabus/2024/BT_11040B1_ja_JP.html") => {
  try {
    //const url = "https://kyo-web.teu.ac.jp/syllabus/2025/X1_L804BC05_ja_JP.html"; // ← ★ 実際のURLに変更してください


    // ✅ TLS 1.2 以上を強制するHTTPSエージェントの作成
    const agent = new https.Agent({
      minVersion: "TLSv1.2",
      rejectUnauthorized: false,
      secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT,
    });

    // ✅ axios でリクエスト
    const { data: html } = await axios.get(url, {
      httpsAgent: agent,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
      }
    });

    const $ = cheerio.load(html);

    const basicTable = $('#tabs-1 table.syllabus-normal').get(0);
    const detailTable = $('#tabs-2 table.syllabus-normal').get(0);

    if (!basicTable || !detailTable) {
      throw new Error('必要なテーブルが見つかりませんでした');
    }

    const basicData = extractTableData($, basicTable);
    const detailData = extractTableData($, detailTable);

    const lectureInfo: LectureInfo = {
      ...basicData,
      ...detailData,
    } as LectureInfo;

    // JSONとして保存
    //fs.writeFileSync('lectureData/lecture.json', JSON.stringify(lectureInfo, null, 2), 'utf8');
    //console.log('✅ lecture.json に保存しました');

    //Dummyの取得
    fs.writeFileSync(`DummyDatas/${basicData.timetableCode}.json`, JSON.stringify(lectureInfo, null, 2), 'utf8');
    console.log(`✅ DummyDatas/${basicData.timetableCode}.json に保存しました`);


  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
  }
};

main();

//ダミーデータの反復処理（mainの反復実行）
dummyDatas.map(dummyUrl => {
  main(dummyUrl);
});
