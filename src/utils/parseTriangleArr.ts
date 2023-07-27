/* eslint-disable no-plusplus */
import type { TriangleType } from '@/types/triangle.types';

export function parseToArr(input = '') {
  return input
    .split(/\n/)
    .map((row) => row.trim())
    .filter((row) => row.length > 0)
    .map((row) =>
      row
        .trim()
        .split(/\s/)
        .map((val) => {
          return { value: Number(val.trim()) };
        }),
    );
}

export function parseTriangleArr(input: string): TriangleType[][] {
  const arr: TriangleType[][] = parseToArr(input);
  let currentIndex = 0;
  if (arr !== undefined) {
    for (let i = 0; i < arr.length; i++) {
      if ((arr as any)[i].length === 1) {
        (arr as any)[i][0].isMax = true;
      } else {
        const nextRowLeftItem = (arr as any)[i][currentIndex].value;
        const nextRowRightItem = (arr as any)[i][currentIndex + 1].value;
        if (nextRowLeftItem > nextRowRightItem) {
          (arr as any)[i][currentIndex].isMax = true;
        } else {
          (arr as any)[i][currentIndex + 1].isMax = true;
          currentIndex += 1;
        }
      }
    }
  }
  return arr;
}
