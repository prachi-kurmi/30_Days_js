/ * Activity 1: Basic Recursion */

//* Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. */

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log('Factorial of 0:', factorial(0));
console.log('Factorial of 1:', factorial(1));
console.log('Factorial of 5:', factorial(3));
console.log('Factorial of 7:', factorial(5));
console.log('Factorial of 10:', factorial(8));



//* Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases. */

function fibnacci(num){
    if(num<=1){
        return num;
    }

    return fibnacci(num-1)+fibnacci(num-2);
}


console.log("Fibonacci of 0: ", fibnacci(0));
console.log("Fibonacci of 2: ", fibnacci(2));
console.log("Fibonacci of 5: ", fibnacci(5));
console.log("Fibonacci of 7: ", fibnacci(7));



/ * Activity 2: Recursion with Arrays */

//* Task 3: Write a recursive function to find the sum of all the elements in an array. Log the result for a few test cases. */

function sum_array(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sum_array(arr.slice(1));
}

console.log("Sum of [1, 2, 3, 4, 5]:", sum_array([1, 2, 3, 4, 5])); 
console.log("Sum of [100, 400, 700]:", sum_array([10, 20, 30]));       

//* Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases. */

function maximum_element(arr){
    if(arr.length === 1){
        return arr[0];
    }

    const rest_element = maximum_element(arr.slice(1));
    return arr[0] > rest_element ? arr[0] : rest_element;
}


console.log("Maximum from [3,7,1,4,9]: ", maximum_element([3,7,1,4,9]));
console.log("Maximum from [-2,-4,-9,-1,-5]: ", maximum_element([-2,-4,-9,-1,-5]));

/ * Activity 3: String manipulation with Recursion */

//* Task 5: Write a recursive funciton to reverse a string. Log the result for a few test cases. */

function reverse_string(str){
    if(str.length <= 1){
        return str;
    }

    return str[str.length - 1] + reverse_string(str.slice(0, str.length - 1));
}

console.log("Reverse of 'Wind':", reverse_string('Wind')); 
console.log("Reverse of '54321':", reverse_string('54321'));
console.log("Reverse of '':", reverse_string(''));

//* Task 6: Write a recursive function to check if a string is a palindrome. Log the result to for few test cases. */

function check_palindrome(str){

    if(str.length <= 1){
        return true;
    }

    if(str[0] === str[str.length - 1]){
        return check_palindrome(str.slice(1, -1));
    }

    return false;
}

console.log("Is 'madam' a palindrome?", check_palindrome('madam'));
console.log("Is 'heaven' a palindrome?", check_palindrome('heaven')); 

/ * Activity 4: Recursive Search */

//* Task 7: Write a recursive function to perform a binary search on a sorted array. Log the the index of the target element for a few test cases. */

function binary_search(arr, target, left = 0, right = arr.length - 1){

    if(left > right){
        return -1;
    }

    const mid = Math.floor(left+right)/2;

    if(arr[mid] === target){
        return mid;
    }

    if(arr[mid] > target){
        return binary_search(arr, target, left, mid-1);
    }

    return binary_search(arr, target, mid+1, right);
}

console.log("Index of 3 in [1, 2, 3, 4, 5, 6, 7, 8, 9]:", binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); 
console.log("Index of 10 in [1, 2, 3, 4, 5, 6, 7, 8, 9]:", binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));


//* Task 8: Write a recursive funtion to count occurrences of a target element in an array. Log the result for few test cases. */

function count_occurrence(arr, target){
    if(arr.length === 0){
        return 0;
    }

    const count = arr[0] === target ? 1 : 0;
    return count + count_occurrence(arr.slice(1), target);
}


console.log("Count of 3 in [1, 2, 3, 4, 3]:", count_occurrence([1, 2, 3, 4, 3], 3)); 
console.log("Count of 5 in []:", count_occurrence([], 5));



/ * Activity 5: Tree Traversal (Optional) */

//* Task 9: Write a recursive function to perform in-order traversal of a binary tree. Log the nodes as they visited. */

class TreeNode{
    constructor(value = 0, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


function in_order(node){
    if(node === null){
        return;
    }

    in_order(node.left);
    console.log(node.value);
    in_order(node.right);
}

// Creating a binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("In-order Traversal:");
in_order(root);

//* Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases. */


function calculate_depth(node) {
    if (node === null) {
        return 0;
    }

    const left = calculate_depth(node.left);
    const right = calculate_depth(node.right);

    return Math.max(left, right) + 1;
}

// Creating a binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
console.log("Depth of the binary tree:", calculate_depth(root)); 

// Creating a tree with a single node:
//        1
const single_node = new TreeNode(1);
console.log("Depth of single node tree:", calculate_depth(single-node)); 

// Creating an empty tree:
console.log("Depth of empty tree:", calculate_depth(null));  


