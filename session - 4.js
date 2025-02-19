// ? Day 4: Arrays & Array Manipulations
// * Session Focus: Array creation, traversal, and manipulation techniques.
// ? Session Practice Questions:
// ! Calculate the sum of elements in an array.

function sumOfArray(arr = []) {
  let sum = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    sum = sum + arr[ind];
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));

// ! calculate the right sided sum of elements in an array
function rightSidedSum(arr = []) {
  let sum = sumOfArray(arr);
  for (let ind = 0; ind < arr.length; ind++) {
    sum = sum - arr[ind];
    arr[ind] = sum;
  }
  console.log(arr);
}
rightSidedSum([1, 2, 3, 4, 5, 6]);
function rightSidedSum1(arr = []) {
  let sum = 0;
  for (let ind = arr.length - 1; ind >= 0; ind--) {
    sum = sum + arr[ind];
    arr[ind] = sum - arr[ind];
  }
  console.log(arr, sum);
}
// rightSidedSum1([1,2,3,4,5,6])
// ! Find the maximum and minimum elements in an array.
// * done in day 1
// ! Find the second - largest element in an array.
function secondLargest(arr = []) {
  let max = arr[0];
  let secMax = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] > max) {
      secMax = max;
      max = arr[ind];
    } else if (arr[ind] > secMax && arr[ind] != max) {
      secMax = arr[ind];
    }
  }
  return [max, secMax];
}
console.log(secondLargest([2, 38, 139, 38, 105, 105, 11, 0, 105]));

// ! Sort an array of integers.
function sort(arr = []) {
  for (let i1 = 0; i1 < arr.length; i1++) {
    for (let i2 = i1 + 1; i2 < arr.length; i2++) {
      if (arr[i1] > arr[i2]) {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]]; // swap
      }
    }
  }
  console.log(arr);
}
sort([3, 5, 6, 2]);

// ! Rotate an array by one position.
function rotateUsingPopAndUnshift(arr = []) {
  arr.unshift(arr.pop());
  console.log(arr);
}
function rotateUsingTemp(arr = []) {
  let temp = arr[arr.length - 1];
  for (let ind = arr.length - 1; ind > 0; ind--) {
    arr[ind] = arr[ind - 1];
  }
  arr[0] = temp;
  return arr;
}
// rotateUsingTemp([1, 2, 3, 4, 5])
// ! rotate an array by k positions
function reverse(arr = [], start = 0, end = arr.length - 1) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotate(arr = [], k = 0) {
  k = arr.length - (k % arr.length);
  reverse(arr, 0, k - 1);
  reverse(arr, k);
  reverse(arr);
  console.log(arr);
  return arr;
}
// rotate([1, 2, 3, 4, 5], 4);
// ! Remove duplicates from a sorted array.
function removeDuplicates(arr = []) {
  let ind = 0;
  for (let fastInd = 0; fastInd < arr.length; fastInd++) {
    if (arr[fastInd] != arr[ind]) {
      ind++;
      arr[ind] = arr[fastInd];
    }
  }
  console.log(ind, arr.slice(0, ind + 1));
  return ind + 1;
}
removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 6, 6]);
// ! Find the number of occurrences of an element in an array.

function countOccurrences(arr) {
  const count = {};
  for (let ind = 0; ind < arr.length; ind++) {
    count[arr[ind]] = 1 + (count[arr[ind]] || 0);
  }
  return count;
}
function countOccurrences1(arr, element) {
  let count = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] == element) count++;
  }
  return count;
}
// todo Post - Session Practice Questions:
// todo Merge two sorted arrays. (very very imp)

function mergedArray(arr1 = [], arr2 = []) {
  let mergedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let i2 = 0; i2 < arr2.length; i2++) {
      if (arr1[i] !== arr2[i2]) {
            mergedArray.push(arr1[i],arr2[i2])
            i++
      }
    }
  }
  console.log(mergedArray);  
}
mergedArray([1,9,10], [2,11,12])
// todo Reverse the elements in an array.
// todo Rotate an array to the left by K positions.
// todo Search for an element in a sorted array.
// todo Find the cumulative sum of an array.
// todo Calculate the product of all elements in an array.
// todo Check if an array is a palindrome.
// todo Find the intersection of two arrays. (imp)
