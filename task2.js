const source = [
  [5, 2, 1, 9, 3, 9, 8, 4],
  [1, 3, 4, 7, 6, 2, 9, 1],
  [6, 5, 5, 8, 2, 7, 1, 2],
];

let matrixScaner = (matrix) => {
  let result = [];
  let actualIdx = matrix[0].length - 2;
  for (let offset = 0; offset < actualIdx; offset++) {
    let cash = [];
    for (let segment = offset; segment < offset + 3; segment++) {
      for (let element = 0; element < 3; element++) {
        !cash.includes(matrix[element][segment]) && cash.push(1);
      }
    }
    result.push(cash.length == 9);
  }
  return result;
};

console.log(matrixScaner(source));
