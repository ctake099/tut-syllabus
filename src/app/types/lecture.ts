import type { Prisma } from '@prisma/client';

/* ① Prisma が返すフル構造 */
export type LectureWithRelations = Prisma.LectureGetPayload<{
  include: {
    instructors: true;
    periods: true;
    departments: true;
    grades: true;
  };
}>;

/* ② LectureCard に渡す props */
export interface LectureCardProps {
  lecture: LectureWithRelations;
}

export interface Period {
  day: string;
  period: number | null;
}

export interface LectureInfo {
  subjectName: string;
  instructors: string[];
  courseCategory: string;
  courseType: string;
  timeTableCode: string;
  semester: string;
  periods: Period[];
  department: string[] | null;
  grade: number[];
  credits: number;
  classroom: string | null;
  lastUpdated: string;
  overview: string;
  objectives: string;
  learningOutcomes: string | null;
  teachingMethod: string;
  notes: string;
  preparation: string;
  evaluation: string;
  textbook: string;
  referenceMaterials: string | null;
  schedulePlan: string;
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

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type Props = {
  initialLectures: any[];
  totalCount: number;
  where: string; // JSON.stringifyされた文字列で受け取る
};


export type SearchFormProps = {
  creditOpts: number[];   // [1,2,3…]
  gradeOpts:  number[];   // [1,2…]
  depOpts:    string[];   // 元の全「学部学科…」リスト
};