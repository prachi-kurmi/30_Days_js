/ * Activity 1: Two Sum */

//* Task 1: Solve the "Two Sum" problem on LeetCode. */
// -> Write a function that takes an array of numbers and a target number, and returns the indices of two numbers that add up to the target.
// -> Log the indices for a few test cases.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return `Index ${i} and ${j} are added to get target ${target}`;
            }
        }
    }
    
    return `No two numbers are present that added to get target ${target}`;
}


console.log("Test Case 1:", twoSum([2, 7, 11, 15], 9));
console.log("Test Case 2:", twoSum([3, 2, 4], 2));



/ * Activity 2: Reverse Integer */

//* Task 2: Solve the "Reverse Integer" problem on LeetCode */
// -> Write a function that takes an integer and returns it with its digits reversed.
// -> Handle edge cases like negative numbers and numbers ending in zero.
// -> Log the reversed integers for few test cases.

function reverseInteger(x) {

    let reversed = 0;
    let number = Math.abs(x);
    
    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }
    
    reversed = x < 0 ? -reversed : reversed;
    
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return reversed;
}

console.log("Test Case 1:", reverseInteger(987));
console.log("Test Case 2:", reverseInteger(-342));
console.log("Test Case 3:", reverseInteger(110));


/ * Activity 3: Palindrome Number */

//* Task 3: Solve the "Palindrome Number" problem on LeetCode  */
// -> Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// -> Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrome(x) {
    if (x < 0) {
        return false;
    }

    // Convert the number to a string
    const str = x.toString();
    
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false; 
        }
        start++;
        end--;
    }
    
    return true; 
}

console.log("Test Case 1:", isPalindrome(121));   
console.log("Test Case 2:", isPalindrome(-121));   



/ * Activity 4: Merge Two Sorted Lists */
// * Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode. */
// -> Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// -> Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    
    let p1 = l1;
    let p2 = l2;

    
    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            current.next = p1;
            p1 = p1.next;
        } else {
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }

    
    if (p1 !== null) {
        current.next = p1;
    } else if (p2 !== null) {
        current.next = p2;
    }

    return dummy.next;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

console.log("Merged List:");
printList(mergeTwoLists(l1, l2)); 


/ * Activity 5: Valid Parentheses */
// * Task 5: Solve the "Valid Parentheses" problem on LeetCode. */
// -> Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// -> A string is valid if open brackets are closed in the correct order.
// -> Log the result for a few test cases.

function isValid(str) {
    const stack = [];
    
    for (let char of str) {
        switch (char) {
            case '(':
            case '{':
            case '[':
                stack.push(char);
                break;
            case ')':
                if (stack.length === 0 || stack[stack.length - 1] !== '(') {
                    return false;
                }
                stack.pop();
                break;
            case '}':
                if (stack.length === 0 || stack[stack.length - 1] !== '{') {
                    return false;
                }
                stack.pop();
                break;
            case ']':
                if (stack.length === 0 || stack[stack.length - 1] !== '[') {
                    return false;
                }
                stack.pop();
                break;
            default:
                
                continue;
        }
    }
    

    return stack.length === 0;
}

console.log("Test Case 1:", isValid("()"));    
console.log("Test Case 2:", isValid("()[]{}")); 
console.log("Test Case 3:", isValid("(]"));  
