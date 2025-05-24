-- CreateTable
CREATE TABLE "Lecture" (
    "id" SERIAL NOT NULL,
    "subjectName" TEXT NOT NULL,
    "courseCategory" TEXT NOT NULL,
    "courseType" TEXT NOT NULL,
    "timeTableCode" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "classroom" TEXT,
    "lastUpdated" TEXT,
    "overview" TEXT,
    "objectives" TEXT,
    "learningOutcomes" TEXT,
    "teachingMethod" TEXT,
    "notes" TEXT,
    "preparation" TEXT,
    "evaluation" TEXT,
    "textbook" TEXT,
    "referenceMaterials" TEXT,
    "schedulePlan" TEXT,

    CONSTRAINT "Lecture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "belongsTo" TEXT,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "period" INTEGER,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LecturePeriods" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LecturePeriods_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_LectureInstructors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LectureInstructors_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_LectureDepartments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LectureDepartments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_LectureGrades" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LectureGrades_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_name_key" ON "Instructor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_value_key" ON "Grade"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Period_day_period_key" ON "Period"("day", "period");

-- CreateIndex
CREATE INDEX "_LecturePeriods_B_index" ON "_LecturePeriods"("B");

-- CreateIndex
CREATE INDEX "_LectureInstructors_B_index" ON "_LectureInstructors"("B");

-- CreateIndex
CREATE INDEX "_LectureDepartments_B_index" ON "_LectureDepartments"("B");

-- CreateIndex
CREATE INDEX "_LectureGrades_B_index" ON "_LectureGrades"("B");

-- AddForeignKey
ALTER TABLE "_LecturePeriods" ADD CONSTRAINT "_LecturePeriods_A_fkey" FOREIGN KEY ("A") REFERENCES "Lecture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LecturePeriods" ADD CONSTRAINT "_LecturePeriods_B_fkey" FOREIGN KEY ("B") REFERENCES "Period"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LectureInstructors" ADD CONSTRAINT "_LectureInstructors_A_fkey" FOREIGN KEY ("A") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LectureInstructors" ADD CONSTRAINT "_LectureInstructors_B_fkey" FOREIGN KEY ("B") REFERENCES "Lecture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LectureDepartments" ADD CONSTRAINT "_LectureDepartments_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LectureDepartments" ADD CONSTRAINT "_LectureDepartments_B_fkey" FOREIGN KEY ("B") REFERENCES "Lecture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LectureGrades" ADD CONSTRAINT "_LectureGrades_A_fkey" FOREIGN KEY ("A") REFERENCES "Grade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LectureGrades" ADD CONSTRAINT "_LectureGrades_B_fkey" FOREIGN KEY ("B") REFERENCES "Lecture"("id") ON DELETE CASCADE ON UPDATE CASCADE;
