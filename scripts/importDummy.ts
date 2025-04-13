import { PrismaClient } from '@prisma/client'
import fs from 'fs/promises'
import path from 'path'
import { Schedule, LectureInfo } from '../types/lecture'

const prisma = new PrismaClient()

async function main() {
  const dir = './scraping/DummyDatas3'
  const files = await fs.readdir(dir)
  const jsonFiles = files.filter((file) => file.endsWith('.json'))

  for (const file of jsonFiles) {
    const filePath = path.join(dir, file)
    const data = await fs.readFile(filePath, 'utf-8')
    const lecture: LectureInfo = JSON.parse(data)

    // Upsert lecture
    const upsertedLecture = await prisma.lecture.upsert({
      where: { timetableCode: lecture.timetableCode },
      update: {
        subjectName: lecture.subjectName,
        credits: lecture.credits,
        semester: lecture.semester,
        grade: lecture.grade,
        department: lecture.department,
        classroom: lecture.classroom,
        lastUpdated: lecture.lastUpdated,
        overview: lecture.overview,
        objectives: lecture.objectives,
        teachingMethod: lecture.teachingMethod,
        notes: lecture.notes,
        preparation: lecture.preparation,
        evaluation: lecture.evaluation,
        textbook: lecture.textbook,
        referenceMaterials: lecture.referenceMaterials,
        schedulePlan: lecture.schedulePlan,
        periods: {
          deleteMany: {},
          create: lecture.schedule.map((s) => ({
            day: s.day,
            period: s.period ?? -1,
          })),
        },
        instructors: {
          deleteMany: {},
          create: await Promise.all(
            lecture.instructors.map(async (name) => {
              const instructor = await prisma.instructor.upsert({
                where: { name },
                update: {},
                create: { name },
              })
              return { instructorId: instructor.id }
            })
          ),
        },
      },
      create: {
        subjectName: lecture.subjectName,
        timetableCode: lecture.timetableCode,
        credits: lecture.credits,
        semester: lecture.semester,
        grade: lecture.grade,
        department: lecture.department,
        classroom: lecture.classroom,
        lastUpdated: lecture.lastUpdated,
        overview: lecture.overview,
        objectives: lecture.objectives,
        teachingMethod: lecture.teachingMethod,
        notes: lecture.notes,
        preparation: lecture.preparation,
        evaluation: lecture.evaluation,
        textbook: lecture.textbook,
        referenceMaterials: lecture.referenceMaterials,
        schedulePlan: lecture.schedulePlan,
        periods: {
          create: lecture.schedule.map((s) => ({
            day: s.day,
            period: s.period ?? -1,
          })),
        },
        instructors: {
          create: await Promise.all(
            lecture.instructors.map(async (name) => {
              const instructor = await prisma.instructor.upsert({
                where: { name },
                update: {},
                create: { name },
              })
              return { instructorId: instructor.id }
            })
          ),
        },
      },
    })

    console.log(`✅ Upserted: ${upsertedLecture.subjectName} (${file})`)
  }
}

main()
  .catch((e) => {
    console.error('❌ Error inserting data:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
