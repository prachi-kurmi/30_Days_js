/ * Activity 1: Add Two Numbers */

//* Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// -> Write a function that takes two non-empty linked lists representing two non-negative integer. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. 
// -> Create a few test cases with linked lists and log the sum as a linked list.


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to reverse Linked List
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Function to add two numbers
function addTwoNumbers(l1, l2) {

    // Step 1: Reverse both linked lists
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    
    // Step 2: Add the two numbers
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    // Step 3: Reverse the resultant linked list
    return reverseList(dummyHead.next);
}

// Function to print linked list
function printLinkedList(list) {
    let result = '';
    while (list !== null) {
        result += list.val;
        if (list.next !== null) {
            result += ' -> ';
        }
        list = list.next;
    }
    console.log(result);
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: 8 -> 0 -> 7


/ * Activity 2: Longest Substring Without Repeating Characters */

//* Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// -> Write a function that takes a string and returns the length of the longest substring without repeating characters.
// -> Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {

    let lastIndex = new Array(256).fill(-1);
    let first = 0, len = 0;

    for (let second = 0; second < s.length; second++) {
        if (lastIndex[s.charCodeAt(second)] >= first) {
            first = lastIndex[s.charCodeAt(second)] + 1;
        }

        lastIndex[s.charCodeAt(second)] = second;
        len = Math.max(len, second - first + 1);
    }

    return len;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")


/ * Activity 3: Container With Most Water */
//* Task 3: Solve the "Container With Most Water" problem on LeetCode.
//-> Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
//-> Log the maximum amount of water for a few test cases.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let area = width * minHeight;

        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1]));               // Output: 1


/ * Activity 4: 3Sum */
//* Task 4: Solve the "3Sum" problem on LeetCode.
// -> Write a function that takes an array of integers and finds all unique triplets in the array which gives the sum of zero.
// -> Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); 

    for (let i = 0; i < nums.length - 2; i++) {
    
        if (i > 0 && nums[i] === nums[i - 1]) 
            continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); 


/ * Activity 5: Group Anagrams */
// * Task5: Solve the "Group Anagrams" problem on LeetCode.
// -> Write a function that takes an array of strings and groups anagrams together. 
// -> Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
    const result = [];
    const groupedAnagrams = [];

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        let found = false;

        for (let i = 0; i < groupedAnagrams.length; i++) {
            if (groupedAnagrams[i][0] === sortedStr) {
                result[i].push(str);
                found = true;
                break;
            }
        }

        if (!found) {
            groupedAnagrams.push([sortedStr]);
            result.push([str]);
        }
    }

    return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]


