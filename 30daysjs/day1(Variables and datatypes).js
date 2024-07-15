//* Activity 1: Variable Declaration*/

//* Task 1: Declare a variable using var, assign it a number, and log the value to the console */

var num = 24;
console.log(num);       //24

//* Task 2: Declare a variable using let, assign it a string, and log the value to the console */

let str = "Hello Everyone"
console.log(str);      //Hello Everyone


//* Activity 2: Constant Declaration*/

//* Task 3: Declare a variable using const, assign it a boolean, and log the value to the console */

const isLoggedIn = true;
console.log(isLoggedIn);     //true

const userLogged = false;
console.log(userLogged);   //false


//* Activity 3: Data Types/

//* Task 4: Create variables of different data types (numbers, string, boolean, object, array) and log each variable's type using the typeof operator */

let score = 100;                  // number
let str_1 = "Hello";             // string 
const is_logging = "true";      // boolean

const myobj = {                //object
    username : "ABCD",
    email : "abcd@gmail.com",
    age : 20
}

const cars = ["Audi", "RR", "Bugatti"]; //Array

console.log(typeof score);           //number
console.log(typeof str_1);          //string
console.log(typeof is_logging);    //string
console.log(typeof myobj);        //object
console.log(typeof cars);        //object


//* Activity 4: Reassigning Variables */

//* Task 5: Declare a varaible using let, assign it an initial value, reassign a new value, and log both values to the console */

let user_name = "FirstUser";
console.log(user_name);    //FirstUser

user_name = "secondUser"
console.log(user_name);   //SecondUser

// It doesn't give any error 
//This is because let allows for mutable binding, meaning the variable can be reassigned to a different value after its initial declaration.

//* Activity 5: Understanding const */

//* Task 6: Try reassigning a variable declared with const and observe the error */

const user_1 = "FirstUser"
console.log(user_1);    //FirstUser

user_1 = "SecondUser"
console.log(user_1); // This line will give error
//TypeError: Assignment to constant variable.
//the const keyword is used to declare variables that are constant, meaning their value cannot be reassigned after they are initialized.
