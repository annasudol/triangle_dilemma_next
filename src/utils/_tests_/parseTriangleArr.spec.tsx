import { parseToArr, parseTriangleArr } from '@/utils/parseTriangleArr';

describe('parseToArr', () => {
  test('return array"', () => {
    expect(parseToArr(`10 11 12 10 33 30`)).toEqual([
      [{ value: 10 }, { value: 11 }, { value: 12 }, { value: 10 }, { value: 33 }, { value: 30 }],
    ]);
  });
});

describe('parseTriangleArr', () => {
  test('return array"', () => {
    expect(
      parseTriangleArr(`10
    11 12
    10 30 33`),
    ).toEqual([
      [{ value: 10, isMax: true }],
      [{ value: 11 }, { value: 12, isMax: true }],
      [{ value: 10 }, { value: 30 }, { value: 33, isMax: true }],
    ]);
  });
});
