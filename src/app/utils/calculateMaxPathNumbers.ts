export function parseToArr(input = '') {
  return input
    .split(/\n/)
    .map((row) => row.trim())
    .filter((row) => row.length > 0)
    .map((row) =>
      row
        .trim()
        .split(/\s/)
        .map((val) => Number(val.trim()))
    );
}

/**
 * @param {number[]} row - the array of numbers to evaluate
 * @returns {number[]} max value from each consecutive pair of numbers
 */
function maxValuesForARow(row: number[]): number[] {
  return row.length === 1
    ? row
    : row.reduce((acc: number[], val: number, i, values) => {
      if (i < values.length - 1) {
        acc.push(Math.max(val, values[i + 1]));
      }
      return acc;
    }, []);
}

export function calculateMaxPathNumbers(input: string) {
  return parseToArr(input)
    .reverse()
    .reduce((acc, curr) => maxValuesForARow(curr.map((val, i) => val + (acc[i] || 0))), [])
    .reduce((acc, curr) => acc + curr, 0);
}

