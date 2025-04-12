// Scheduleインターフェース: 講義のスケジュール情報を管理
export interface Schedule {
  day: string | null;  // 曜日（例: 月曜日、火曜日）
  period?: number | null;  // 時限（1, 2, 3...）時限がない場合はnull
}
  
// LectureInfoインターフェース: 講義の詳細情報
export interface LectureInfo {
  subjectName: string | null;  // 科目名
  instructors: string[] | null;  // 担当教員（複数可）
  courseCategory: string | null;  // 授業科目区分
  courseType: string | null;  // 授業種別
  timetableCode: string | null;  // 時間割コード
  semester: string | null;  // 開講学期
  schedule: Schedule[] | null;  // 開講曜日・時限
  department: string[] | null;  // 対象学科
  grade: number[] | null;  // 対象学年
  credits: number | null;  // 単位数
  classroom: string | null;  // 教室
  lastUpdated: string | null;  // 最終更新日
  overview: string | null;  // 授業概要
  objectives: string | null;  // 到達目標
  learningOutcomes: string | null;  // ラーニングアウトカム
  teachingMethod: string | null;  // 授業方法
  notes: string | null;  // 履修上の注意
  preparation: string | null;  // 準備学習
  evaluation: string | null;  // 成績評価方法・基準
  textbook: string | null;  // 教科書
  referenceMaterials: string | null;  // 参考書
  schedulePlan: string | null;  // 授業計画
}