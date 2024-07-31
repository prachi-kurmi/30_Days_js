/ * Activity 1: Sorting Algorithm */

//* Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array. */

function bubbleSort(arr) {
    let n = arr.length;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    }
    return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(arr);
console.log("Sorted array:", sorted);


//* Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array. */

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const arr2 = [8, 3, 1, 2, 5, 9];
const sorted2 = selectionSort(arr2);
console.log("Sorted array:", sorted2);

//* Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array. */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // Choosing the last element as the pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Sorted array:", quickSort([56, 78, 32, 12, 88, 43, 9, 11]));



/ * Activity 2: Searching Algorithms */

//* Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value. */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Target value ${target} found at index ${i}.`);
            return i; 
        }
    }
    console.log(`Target value ${target} not found in the array.`);
    return -1; 
}

const arr3 = [6, 5, 2, 1, 3, 4];
const target = 2;
linearSearch(arr3, target);

//* Task 5: Implement the binary search algorithm to find the target value in sorted array. Log the index of the target value. */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            console.log(`Target value ${target} found at index ${middle}.`);
            return middle; 
        } else if (arr[middle] < target) {
            left = middle + 1; 
        } else {
            right = middle - 1; 
        }
    }
    console.log(`Target value ${target} not found in the array.`);
    return -1; 
}

const arr4 = [10, 12, 24, 29, 39, 40, 51,56];
const targett = 51;
const index = binarySearch(arr4, targett);



/ * Activity 3: String Algorithms */

//* Task 6: Write a function to count the occurrences of each character in a string. Log the chracter count. */

function countCharacter(str) {
    const charCount = {};
    
    for (const char of str) {
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }
    
    return charCount;
}

console.log("Character counts:", countCharacter("Weekend"));


//* Task 7: Write a function to find the longest substring without repeaing characters in a string. Log the length of the substring. */

function longestSubstring(str) {
    let start = 0;
    let end = 0;
    
    let charSet = new Set();
    
    let maxLength = 0;
    
    while (end < str.length) {
    
        if (!charSet.has(str[end])) {
            charSet.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, end - start);
        } else {
        
            charSet.delete(str[start]);
            start++;
        }
    }
    
    return maxLength;
}

let str = "ababcabbac";
let length = longestSubstring(str);
console.log("Length of the longest substring without repeating characters:", length);


/ * Activity 4: Array Algorithms */

//* Task 8: Write a function to rotate an array by k positions. Log the rotated array. */

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 

    if (k === 0){
        return arr;
    }

    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    return rotatedArray;
}

const arr5 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(arr5, k);
console.log("Rotated array:", rotatedArray);

//* Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array. */

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const array1 = [1, 2, 5, 9];
const array2 = [3, 4, 7, 8];
const mergedArray = mergeSortedArrays(array1, array2);
console.log("Merged array:", mergedArray);

