import { PrismaClient } from '@prisma/client'
import { readdirSync, readFileSync } from 'fs'
import path from 'path'

const prisma = new PrismaClient()

const DATA_DIR = path.join(__dirname, '../scrape/data/lectureData')

function parseInstructor(raw: string) {
  const match = raw.match(/^(.*?)\((.*?)\)$/)
  if (!match) return { name: raw, belongsTo: null }
  return { name: match[1], belongsTo: match[2] }
}

async function main() {
    const files = readdirSync(DATA_DIR).filter(file => file.endsWith('.json'))
    for (const file of files) {
        const raw = readFileSync(path.join(DATA_DIR, file), 'utf-8')
        const data = JSON.parse(raw)

        // Instructor
        const instructors = await Promise.all(
            data.instructors.map(async (fullName: string) => {
                const { name, belongsTo } = parseInstructor(fullName)
                return prisma.instructor.upsert({
                    where: { name },
                    update: {},
                    create: { name, belongsTo },
                })
            })
        )
    

        const departments = await Promise.all(
            (data.department || []).map((name: string) =>
                prisma.department.upsert({
                    where: { name },
                    update: {},
                    create: { name },
                })
            )
        )

        const grades = await Promise.all(
            data.grade.map((value: number) =>
                prisma.grade.upsert({
                    where: { value },
                    update: {},
                    create: { value },
                })
            )
        )

        const periods: any[] = []
        for (const s of data.schedule) {
            if (!s.day) continue

            const existing = await prisma.period.findFirst({
                where: {
                    day: s.day,
                    period: s.period ?? null,
                },
            })

            if (existing) {
                periods.push(existing)
            } else {
                const created = await prisma.period.create({
                    data: {
                        day: s.day,
                        period: s.period ?? null,
                    },
                })
                periods.push(created)
            }
        }

        await prisma.lecture.create({
            data: {
                subjectName: data.subjectName,
                courseCategory: data.courseCategory,
                courseType: data.courseType,
                timeTableCode: data.timetableCode,
                semester: data.semester,
                credits: data.credits,
                classroom: data.classroom,
                lastUpdated: data.lastUpdated,
                overview: data.overview,
                objectives: data.objectives,
                learningOutcomes: data.learningOutcomes,
                teachingMethod: data.teachingMethod,
                notes: data.notes,
                preparation: data.preparation,
                evaluation: data.evaluation,
                textbook: data.textbook,
                referenceMaterials: data.referenceMaterials,
                schedulePlan: data.schedulePlan,
                instructors: {
                connect: instructors.map(i => ({ id: i.id }))
                },
                departments: {
                connect: departments.map(d => ({ id: d.id }))
                },
                grades: {
                connect: grades.map(g => ({ id: g.id }))
                },
                periods: {
                connect: periods.map(p => ({ id: p.id }))
                },
            }
        })

        console.log(`${file}をデータベースに追加しました`)
    }

    


}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)    
  })
  .finally(() => prisma.$disconnect()) 