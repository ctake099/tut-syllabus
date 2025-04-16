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

// lecture.ts

// APIで返ってくる講義の構造（Prismaのincludeに対応）
export type LectureFromAPI = {
    subjectName: string;
    timetableCode: string;
    credits: number;
    semester: string;
    grade: number[];
    department: string[];
    classroom: string;
    lastUpdated: string;
    overview: string;
    objectives: string;
    teachingMethod: string;
    notes: string;
    preparation: string;
    evaluation: string;
    textbook: string;
    referenceMaterials: string;
    schedulePlan: string;
  
    // Prismaの include による構造（中間テーブルの instructor を含む）
    instructors: {
      instructor: {
        name: string;
      };
    }[];
  
    periods: {
      day: string;
      period: number;
    }[];
  };