const arr2 = [2, 4, 9, 14, 23, 7];
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j - 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
};
insertionSort(arr2);
console.log(arr2);
