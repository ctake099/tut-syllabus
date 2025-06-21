-- 検索パフォーマンス向上のためのインデックス追加

-- Lectureテーブルの検索フィールドにインデックス
CREATE INDEX IF NOT EXISTS idx_lecture_subject_name ON "Lecture"("subjectName");
CREATE INDEX IF NOT EXISTS idx_lecture_credits ON "Lecture"("credits");
CREATE INDEX IF NOT EXISTS idx_lecture_semester ON "Lecture"("semester");

-- Instructorテーブルの名前検索用インデックス  
CREATE INDEX IF NOT EXISTS idx_instructor_name ON "Instructor"("name");

-- Departmentテーブルの名前検索用インデックス
CREATE INDEX IF NOT EXISTS idx_department_name ON "Department"("name");

-- Gradeテーブルの値検索用インデックス
CREATE INDEX IF NOT EXISTS idx_grade_value ON "Grade"("value");

-- Periodテーブルの曜日・時限検索用インデックス
CREATE INDEX IF NOT EXISTS idx_period_day_period ON "Period"("day", "period");

-- 複合インデックス（よく一緒に検索される条件）
CREATE INDEX IF NOT EXISTS idx_lecture_credits_semester ON "Lecture"("credits", "semester");