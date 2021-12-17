const arr1 = [7, 2, 6, 5, 4];
const quickSort = (arr, startIdx, endIdx) => {
  if (startIdx >= endIdx) {
    return;
  }
  let pivotIdx = partition(arr, startIdx, endIdx);
  quickSort(arr, startIdx, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, endIdx);
};
const partition = (arr, startIdx, endIdx) => {
  let pivotIdx = startIdx;
  let pivotVal = arr[endIdx];
  for (let i = startIdx; i < endIdx; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, pivotIdx);
      pivotIdx++;
    }
  }
  swap(arr, pivotIdx, endIdx);
  return pivotIdx;
};
const swap = (arr, a, b) => {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};
quickSort(arr1, 0, arr1.length - 1);
console.log(arr1);
