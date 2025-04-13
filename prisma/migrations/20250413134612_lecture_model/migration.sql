-- CreateTable
CREATE TABLE "Lecture" (
    "id" SERIAL NOT NULL,
    "subjectName" TEXT NOT NULL,
    "instructors" TEXT[],
    "courseCategory" TEXT NOT NULL,
    "courseType" TEXT NOT NULL,
    "timetableCode" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "schedule" JSONB NOT NULL,
    "department" TEXT[],
    "grade" INTEGER[],
    "credits" INTEGER NOT NULL,
    "classroom" TEXT NOT NULL,
    "lastUpdated" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "objectives" TEXT NOT NULL,
    "learningOutcomes" TEXT NOT NULL,
    "teachingMethod" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "preparation" TEXT NOT NULL,
    "evaluation" TEXT NOT NULL,
    "textbook" TEXT NOT NULL,
    "referenceMaterials" TEXT NOT NULL,
    "schedulePlan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lecture_pkey" PRIMARY KEY ("id")
);
