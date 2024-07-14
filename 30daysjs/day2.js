// * Activity 1: Arithmetic Operations */

//* Task 1: Write a program to add two numbers and log result to the console */

let num1 = 1 , num2 = 3;

console.log("Sum of two number is:", num1+num2);  //4

//* Task 2: Write a program to subtract two numbers and log result to the console */

console.log("Subtraction of two number is: ", num1-num2); //-2

//* Task 3: Write a program to multiply two numbers and log result to the console */

console.log("Muliplication of two number is: ", num1*num2); //3

//* Task 4: Write a program to divide two numbers and log result to the console */

console.log("Divison of two number is: ", num1/num2); //0.33333333

//* Task 5: Write a program to find the remainder when one number is divided by another and log result to the console */

console.log("Remainder when one number divided by another: ", num1%num2); //1


//* Activity 2: Assignment Operators */

// * Task 6: Use the += operator to add a number to a variable and log the result to the console */

let user_name = "Demon"

user_name += 10;

console.log(user_name);   // Demon10    Because here + operator act as concatenation

// * Task 7: Use the -= operator to a number from a variable and log the result to the console */

let score = 33;

score -= 5;

console.log(score);     //33-5 = 28


//* Activity 3: Comparison Operators*/

//* Task 8: Write a program to compare two numbers using > and < and log result to the console */

let score_1 = 89;
let score_2 = 35;

console.log("Player 1 score is greater than Player 2", score_1 > score_2);  //true
console.log("Player 1 score is less than Player 2", score_1 < score_2);  //false

//* Task 9: Write a program to compare two numbers using >= and <= and log result to the console */

let num_1 = 34;
let num_2 = 34;

console.log(`Player 1 score ${num_1} is greater than equal to Player 2 score ${num_2}`, num1>=num_2); //false
console.log(`Player 1 score ${num_1} is less than equal to Player 2 score ${num_2}`, num1<=num_2);  //false

//* Task 10: Write a program to compare two numbers using == and === and log the result to the console */

let num_3 = "2"
let num_4 = 2

console.log(`Number_1 ${num_3} is equal(==) to Number_2 ${num_4}`, num_3 == num_4);      // true
console.log(`Number_1 ${num_3} is equal(===) to Number_2 ${num_4}`, num_3 === num_4);    //false

// == this operator don't check the datatype but === this operator checks the datatype also 


//* Activity 4: Logical Operators */

//* Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console */

let age = 24;

if(age >= 18 && age <= 50){
    console.log(`Person age is ${age} eligible for driving`);
}

/* (&&) AND operator checks that if the both conditions are true then it will give true */

//* Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console */

let age_2 = 7

if(age_2 >= 3 || age_2 <= 45){
    console.log(`Age is ${age_2} eligible to go to school`);
}

/*   (||) OR operator checks that if any of the condition is true it gives true 
 */

//* Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console */

let person = false

if(!person){
    console.log("Person is true");
}

// (!) NOT Operator makes true -> false and false -> true


//* Activity 5: Ternary Operator */

//* Task 14: Write a program that uses the ternary operator to check if number is positive or negative and log the result to the console */

let number_1 = -2

console.log(number_1<0 ? "Number is negative" : "Number is positive");

// Ternary operator checks the condition if true then first condition will print else second condition will print
