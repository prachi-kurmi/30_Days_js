//* Acticity 1: Template Literals */

//* Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the result to the console. */

function template_literals(name, age){
    
    this.name = name;
    this.age = age;

    console.log(`Hello, my name is ${name} and age is ${age}`);

}

template_literals("Alice", 23)



//* Activity 2: Create a multi-line string using template literals and log it to the console. */

const multi_line = function(){
    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
}

console.log(multi_line());



//* Activity 2: Destructuring */

//* Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. */

const numbers = [1, 2, 3, 4, 5]

const [first, second] = numbers;

console.log(`First element of array is: ${first} and second element of array is: ${second}`);

//* Task 4: Use object destructing to extract the title and author from a book object and log them to the console. */

const book_object ={

    title: "Think and Grow Rich",
    author: "Napoleon Hill"

}

const {title} = book_object;
const {author} = book_object
console.log(`The title of book is: ${title} and author of book is: ${author}`);



//* Activity 3: Spread and Rest Operators */

//* Task 5: Use the spread operator to create a new array that includes all the elements of an existing array plus additional elements, and log the new array to the console. */

const num_array = [ 1, 2, 3, 4, 5]
const cars = [ "Bugatti", "RollsRoyce", "Supra"]

const new_array = [...num_array, ...cars]

console.log(new_array);

//* Task 6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result. */

function sum_all(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum of all numbers are: ",sum_all(1,2,3,4,5));
console.log("Sum of all numbers are: ", sum_all(1,2));



//* Activity 4: Default Parameters */

//* Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. */

function two_product(num1, num2 = 1){
    let result = num1 * num2;
    console.log(`Product of two number ${num1} and ${num2}:`, result);
    return result;
}

two_product(2,3); //with second parameter
two_product(2); //without second parameter



//* Activity 5: Enhanced Object Literals */

//* Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. */


const person = {
    
    name: "Alice",
    age: 25,

    greeting: function(){

        return `Good evening ${this.name} and age is : ${this.age}`

    }
}

console.log(person)
console.log(person.greeting());


//* Task 9: Create an object with computed property names based on variables and log the object to the console. */

let book_title = "title"
let book_author = "author"
let book_year = "year"


const book_deatils = {

    [book_title]: "Educated",
    [book_author]: "Tara Westover",
    [book_year]: 2018

}

console.log(book_deatils);

