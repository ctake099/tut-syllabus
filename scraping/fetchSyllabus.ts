import axios from 'axios';
import * as https from 'https';
import { constants } from 'crypto';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

import { LectureInfo, Schedule } from '../types/lecture';

const normalize = (str: string) =>
  str.replace(/\s+/g, '').replace(/（/g, '(').replace(/）/g, ')');

const keyMap: Record<string, keyof LectureInfo | undefined> = {
  [normalize('科目名')]: 'subjectName',
  [normalize('担当教員（所属）')]: 'instructors',
  [normalize('授業科目区分')]: 'courseCategory',
  [normalize('授業種別')]: 'courseType',
  [normalize('時間割コード')]: 'timetableCode',
  [normalize('開講学期')]: 'semester',
  [normalize('開講曜限')]: 'schedule',
  [normalize('対象所属')]: 'department',
  [normalize('対象学年')]: 'grade',
  [normalize('単位数')]: 'credits',
  [normalize('教室')]: 'classroom',
  [normalize('更新日')]: 'lastUpdated',
  [normalize('授業概要')]: 'overview',
  [normalize('到達目標')]: 'objectives',
  [normalize('ラーニング・アウトカムズ(学修到達目標)')]: 'learningOutcomes',
  [normalize('授業方法')]: 'teachingMethod',
  [normalize('履修上の注意')]: 'notes',
  [normalize('準備学習')]: 'preparation',
  [normalize('成績評価方法・基準')]: 'evaluation',
  [normalize('教科書')]: 'textbook',
  [normalize('参考書')]: 'referenceMaterials',
  [normalize('授業計画')]: 'schedulePlan',
};

const dummyDatas = [
  'https://kyo-web.teu.ac.jp/syllabus/2024/BT_11040B1_ja_JP.html',
];

const extractTableData = ($: cheerio.Root, table: cheerio.Element): Partial<LectureInfo> => {
  const data: Partial<LectureInfo> = {
    subjectName: '',
    instructors: [],
    courseCategory: '',
    courseType: '',
    timetableCode: '',
    semester: '',
    schedule: [],
    department: [],
    grade: [],
    credits: 0,
    classroom: '',
    lastUpdated: '',
    overview: '',
    objectives: '',
    learningOutcomes: '',
    teachingMethod: '',
    notes: '',
    preparation: '',
    evaluation: '',
    textbook: '',
    referenceMaterials: '',
    schedulePlan: '',
  };

  $(table).find('tr').each((_, row) => {
    const rawTh = $(row).find('th').text();
    const th = normalize(rawTh);
    const tdRaw = $(row).find('td').html() ?? '';
    const td = tdRaw.replace(/<br\s*\/?>/gi, '\n').replace(/\s+/g, ' ').trim();
    const key = keyMap[th];
    if (!key) return;

    let value: any;
    if (key === 'schedule') {
      value = td.split(',').map(str => {
        const match = str.replace(/\s+/g, '').match(/^([^\d]+)(\d+)$/);
        return match ? { day: match[1], period: Number(match[2]) } : { day: '他', period: null };
      });
    } else if (key === 'department') {
      value = td ? td.split(',').map(str => str.trim()) : [];
    } else if (key === 'instructors') {
      value = td
        ? td.split(',').map(str => {
            const nameOnly = str.trim().match(/^([^（(]+)/);
            return nameOnly ? nameOnly[1].trim() : '';
          }).filter(name => name !== '')
        : [];
    } else if (key === 'grade') {
      value = td
        ? td.split(',')
            .map(str => {
              const match = str.replace(/\s+/g, '').match(/\d+(\.\d+)?/g);
              return match ? Number(match[0]) : null;
            })
            .filter((val): val is number => val !== null)
        : [];
    } else if (key === 'credits') {
      value = td ? Number(td) : 0;
    } else {
      value = td || '';
    }

    data[key] = value;
    console.log(`✅ data["${key}"] に代入しました:`, value);
  });

  return data;
};

const main = async (url: string) => {
  await fs.promises.mkdir('DummyDatas2', { recursive: true });
  try {
    const agent = new https.Agent({
      minVersion: 'TLSv1.2',
      rejectUnauthorized: false,
      secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT,
    });

    const { data: html } = await axios.get(url, {
      httpsAgent: agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
      },
    });

    const $ = cheerio.load(html);
    const basicTable = $('#tabs-1 table.syllabus-normal').get(0);
    const detailTable = $('#tabs-2 table.syllabus-normal').get(0);

    if (!basicTable || !detailTable) throw new Error('必要なテーブルが見つかりませんでした');

    const basicData = extractTableData($, basicTable);
    const detailData = extractTableData($, detailTable);

    const lectureInfo: LectureInfo = {
      ...basicData,
      ...detailData,
    };

    console.log(`📥 取得完了: ${lectureInfo.timetableCode}`);
    await fs.promises.writeFile(`DummyDatas2/${lectureInfo.timetableCode}.json`, JSON.stringify(lectureInfo, null, 2), 'utf8');
    console.log(`✅ 保存完了: DummyDatas2/${lectureInfo.timetableCode}.json`);
  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
  }
};

const runAll = async () => {
  await Promise.all(dummyDatas.map(dummyUrl => main(dummyUrl)));
  console.log('✅ 全ての処理が完了しました');
};

runAll();