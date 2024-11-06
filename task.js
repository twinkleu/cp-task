class Solution {
  //Question 1st
  printMatrix(matrix) {
    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let r = matrix[0].length - 1;
    let l = 0;

    //  for(let i=n)
    while (top <= bottom && l <= r) {
      //   result.push(matrix[top][i])
      for (let i = l; i <= r; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][r]);
      }
      r--;
      if (top <= bottom) {
        for (let i = r; i >= l; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
      if (l <= r) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][l]);
        }
        l++;
      }
    }
    return result;
  }

  //Question 4th
  printArr(arr) {
    let n = arr.length;
    let result = [];

    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
      if (i <= j) {
        result.push(arr[j]);
        j--;
      }
      if (i <= j) {
        result.push(arr[i]);
        i++;
      }
    }
    return result.join(" ");
  }

  //Questin 3rd
  uniquePermutation(str) {
    const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const permute = (arr, start, result) => {
      if (start === arr.length) {
        result.add(arr.join(""));
        return;
      }

      for (let i = start; i < arr.length; i++) {
        swap(arr, start, i);
        permute(arr, start + 1, result);
        swap(arr, start, i);
      }
    };
    const result = new Set();
    permute(str.split(""), 0, result);

    return Array.from(result).sort();
  }
}
const res = new Solution();

//question 1st  console
console.log(
  res.printMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

//question 4th console
console.log(res.printArr([1, 2, 3, 4, 5, 6]));

//question 3rd console
console.log(res.uniquePermutation("ABC"));
