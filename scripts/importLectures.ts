import { PrismaClient } from '@prisma/client'
import fs from 'fs/promises'
import path from 'path'
import { LectureInfo } from '../types/lecture'
import { toPrismaLecture } from './toPrismaLecture'

const prisma = new PrismaClient()

async function main() {
  const dir = './scraping/DummyDatas3'
  const files = await fs.readdir(dir)
  const jsonFiles = files.filter((file) => file.endsWith('.json'))

  for (const file of jsonFiles) {
    const filePath = path.join(dir, file)
    const data = await fs.readFile(filePath, 'utf-8')
    const lecture: LectureInfo = JSON.parse(data)

    const { create, update } = await toPrismaLecture(prisma, lecture)

    const upsertedLecture = await prisma.lecture.upsert({
      where: { timetableCode: lecture.timetableCode },
      create,
      update,
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