/** Merge Sort */

function merge(arr1, arr2) {
  const results = [];
  //pointers
  let i = 0; //pointer for arr1
  let j = 0; //pointer for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  //check for all elements of arr1
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  //check for all elements of arr2
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

//recursive
function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;

  //typical case
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
