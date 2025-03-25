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
  schedule: string;
  department: string;
  grade: string;
  credits: string;
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
  '授業計画': 'schedulePlan',
};

// --- テーブルからデータを抽出 ---
const extractTableData = ($: cheerio.Root, table: cheerio.Element): Partial<LectureInfo> => {
  const data: Partial<LectureInfo> = {};

  $(table).find('tr').each((_, row) => {
    const th = $(row).find('th').text().trim().replace(/\s+/g, ' ');
    let td = $(row).find('td').html()?.trim() || '';
    td = td.replace(/<br\s*\/?>/gi, '\n').replace(/\s+/g, ' ').trim();

    const key = keyMap[th];
    if (key && td) {
      data[key] = td;
    }
  });

  return data;
};

// --- メイン処理 ---
const main = async () => {
  try {
    const url = "https://kyo-web.teu.ac.jp/syllabus/2024/MS_11040M1_ja_JP.html"; // ← ★ 実際のURLに変更してください

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
    fs.writeFileSync('lectureData/lecture.json', JSON.stringify(lectureInfo, null, 2), 'utf8');
    console.log('✅ lecture.json に保存しました');

  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
  }
};

main();
