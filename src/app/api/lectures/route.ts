import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') || ''
  const instructor = searchParams.get('instructor') || ''
  const day = searchParams.get('day') || ''
  const periodParam = searchParams.get('period')
  const period = periodParam ? parseInt(periodParam, 10) : undefined
  const gradeParam = searchParams.get('grade')
  const grade = gradeParam ? parseInt(gradeParam, 10) : undefined

  const slots = searchParams.getAll('slot') // 例: ["月-1", "金-2"]
  const periodFilters = slots.map((slot) => {
    const [day, periodStr] = slot.split('-')
    return {
      periods: {
        some: {
          day,
          period: parseInt(periodStr, 10),
        },
      },
    }
  })

  console.log("🔍 q =", q)
  console.log("🔍 instructor =", instructor)
  console.log("🔍 day =", day)
  console.log("🔍 period =", period)
  console.log("🔍 grade =", grade)

  try {
    const whereClause = {
      ...(q && {
        subjectName: {
          contains: q,
          mode: 'insensitive' as const,
        },
      }),
      ...(grade !== undefined && {
        grade: {
          has: grade,
        },
      }),
      ...(instructor && {
        instructors: {
          some: {
            instructor: {
              name: {
                contains: instructor,
                mode: 'insensitive' as const,
              },
            },
          },
        },
      }),

      ...(periodFilters.length > 0 && {
        OR: periodFilters, // ← 複数 (day, period) の OR
      }),
    }

    console.log("📦 where clause", whereClause)

    const lectures = await prisma.lecture.findMany({
      where: whereClause,
      take: 30,
      include: {
        periods: true,
        instructors: {
          include: {
            instructor: true,
          },
        },
      },
    })

    return NextResponse.json(lectures)
  } catch (error) {
    console.error("❌ API Error:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}