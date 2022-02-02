const source = [1, 3, 4, 5, 7, 3, 3, 4, 4, 7, 5, 8, 6, 3, 3, 3, 8];

function comparator(sourceArr) {
  let actualIdx = sourceArr.length - 1;
  return sourceArr.reduce((acc, _, idx, arr) => {
    if (idx == 0 || idx == actualIdx) return acc;
    if (
      (arr[idx] > arr[idx - 1] && arr[idx] > arr[idx + 1]) ||
      (arr[idx] < arr[idx - 1] && arr[idx] < arr[idx + 1])
    ) {
      acc.push(1);
      return acc;
    }
    acc.push(0);
    return acc;
  }, []);
}

console.log(comparator(source));
