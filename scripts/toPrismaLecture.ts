import { PrismaClient, Prisma } from '@prisma/client'
import { LectureInfo } from '../types/lecture'

export async function toPrismaLecture(
  prisma: PrismaClient,
  lecture: LectureInfo
): Promise<{
  create: Prisma.LectureCreateInput
  update: Prisma.LectureUpdateInput
}> {
  const instructorRecords = await Promise.all(
    lecture.instructors.map(async (name) => {
      const instructor = await prisma.instructor.upsert({
        where: { name },
        update: {},
        create: { name },
      })
      return { instructorId: instructor.id }
    })
  )

  const periods = lecture.schedule
    .filter((s): s is { day: string; period: number } => s.day !== null && s.period !== null)
    .map((s) => ({
      day: s.day,
      period: s.period,
    }))

  const base = {
    subjectName: lecture.subjectName,
    credits: lecture.credits,
    semester: lecture.semester,
    grade: lecture.grade,
    department: lecture.department ?? [],
    classroom: lecture.classroom ?? '',
    lastUpdated: lecture.lastUpdated,
    overview: lecture.overview,
    objectives: lecture.objectives,
    teachingMethod: lecture.teachingMethod,
    notes: lecture.notes,
    preparation: lecture.preparation,
    evaluation: lecture.evaluation,
    textbook: lecture.textbook,
    referenceMaterials: lecture.referenceMaterials ?? '',
    schedulePlan: lecture.schedulePlan,
  }

  return {
    create: {
      ...base,
      timetableCode: lecture.timetableCode,
      periods: { create: periods },
      instructors: { create: instructorRecords },
    },
    update: {
      ...base,
      periods: { deleteMany: {}, create: periods },
      instructors: { deleteMany: {}, create: instructorRecords },
    },
  }
}