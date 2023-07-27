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
          return { 'value': Number(val.trim()) }
        })
    );
}


export function parseTriangleArr(input: string): { value: number, isMax?: boolean }[][] {
  const arr: { value: number, isMax?: boolean }[][] = parseToArr(input)
  let currentIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      arr[i][0].isMax = true
    } else {
      const nextRowLeftItem = arr[i][currentIndex].value;
      const nextRowRightItem = arr[i][currentIndex + 1].value;
      if (nextRowLeftItem > nextRowRightItem) {
        arr[i][currentIndex].isMax = true
        currentIndex = currentIndex
      } else {
        arr[i][currentIndex + 1].isMax = true
        currentIndex = currentIndex + 1
      }
    }
  }

  return arr;
}
