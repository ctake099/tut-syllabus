'use server';

import { prisma } from '../../prisma/prisma';

export async function loadMoreLectures(offset: number) {
  const more = await prisma.lecture.findMany({
    skip: offset,
    take: 50,
    include: {
      instructors: true,
      periods: true,
      departments: true,
      grades: true,
    },
  });

  return more;
}