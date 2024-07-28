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
