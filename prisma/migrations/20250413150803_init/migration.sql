/*
  Warnings:

  - You are about to drop the column `courseCategory` on the `Lecture` table. All the data in the column will be lost.
  - You are about to drop the column `courseType` on the `Lecture` table. All the data in the column will be lost.
  - You are about to drop the column `instructors` on the `Lecture` table. All the data in the column will be lost.
  - You are about to drop the column `schedule` on the `Lecture` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[timetableCode]` on the table `Lecture` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Lecture" DROP COLUMN "courseCategory",
DROP COLUMN "courseType",
DROP COLUMN "instructors",
DROP COLUMN "schedule";

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LectureInstructor" (
    "id" SERIAL NOT NULL,
    "lectureId" INTEGER NOT NULL,
    "instructorId" INTEGER NOT NULL,

    CONSTRAINT "LectureInstructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LecturePeriod" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "period" INTEGER NOT NULL,
    "lectureId" INTEGER NOT NULL,

    CONSTRAINT "LecturePeriod_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_name_key" ON "Instructor"("name");

-- CreateIndex
CREATE INDEX "LectureInstructor_lectureId_idx" ON "LectureInstructor"("lectureId");

-- CreateIndex
CREATE INDEX "LectureInstructor_instructorId_idx" ON "LectureInstructor"("instructorId");

-- CreateIndex
CREATE UNIQUE INDEX "LectureInstructor_lectureId_instructorId_key" ON "LectureInstructor"("lectureId", "instructorId");

-- CreateIndex
CREATE INDEX "LecturePeriod_day_idx" ON "LecturePeriod"("day");

-- CreateIndex
CREATE INDEX "LecturePeriod_period_idx" ON "LecturePeriod"("period");

-- CreateIndex
CREATE INDEX "LecturePeriod_lectureId_idx" ON "LecturePeriod"("lectureId");

-- CreateIndex
CREATE UNIQUE INDEX "Lecture_timetableCode_key" ON "Lecture"("timetableCode");

-- AddForeignKey
ALTER TABLE "LectureInstructor" ADD CONSTRAINT "LectureInstructor_lectureId_fkey" FOREIGN KEY ("lectureId") REFERENCES "Lecture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LectureInstructor" ADD CONSTRAINT "LectureInstructor_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LecturePeriod" ADD CONSTRAINT "LecturePeriod_lectureId_fkey" FOREIGN KEY ("lectureId") REFERENCES "Lecture"("id") ON DELETE CASCADE ON UPDATE CASCADE;
