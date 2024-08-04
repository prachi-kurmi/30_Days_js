/ * Activity 1: Median of Two Sorted Arrays */
//* Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// -> Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// -> Log the median for a few test cases, including edge cases.

function MedianSorted(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }
    
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }
    
    const n = merged.length;
    if (n % 2 === 1) {
        return merged[Math.floor(n / 2)];
    } else {
        const mid = n / 2;
        return (merged[mid - 1] + merged[mid]) / 2;
    }
}

console.log(MedianSorted([1, 3], [2])); 
console.log(MedianSorted([1, 2], [3, 4]));
console.log(MedianSorted([0, 0], [0, 0]));



/ * Activity 2: Merge k Sorted Lists */
//* Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// -> Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// -> Create a few test cases with linked lists and log the merged list.


function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0); // Dummy node 
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }


    tail.next = l1 || l2;

    return dummy.next;
}

// Function to merge k sorted linked lists
function mergeKLists(lists) {
    if (lists.length === 0) return null;

    let mergedList = lists[0];

    for (let i = 1; i < lists.length; i++) {
        mergedList = mergeTwoLists(mergedList, lists[i]);
    }

    return mergedList;
}

// Function to print the linked list
function printList(head) {
    let curr = head;
    const result = [];
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(' -> '));
}

// Function to create list from array
function createList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (const num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}


const lists1 = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6])
];
const merged1 = mergeKLists(lists1);
console.log('Merged List 1:');
printList(merged1); // output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

const lists2 = [];
const merged2 = mergeKLists(lists2);
console.log('Merged List 2:');
printList(merged2); // output: empty


/ * Activity 3: Trapping Rain Water */
//* Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// -> Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// -> Log the amount of trapped water for a few test cases.

function trap(height) {

    const n = height.length;
    if (n === 0) return 0;

    
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let water = 0;
    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9

 
/ * Activity 4: N-Queens */
//* Task 4: Solve the "N-Queens" problem on LeetCode.
// -> Write a function that places n queens on an n×n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// -> Log the distinct solutions for a few test cases.


/ * Activity 5: Word Ladder */
// * Task 5: Solve the "Word Ladder" problem on Leetcode.
// -> Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word such that only one letter can be changed at a time and each transformed word must exist in the word list. 
// -> Log the length of the shortest transformation sequence for a few test cases.

