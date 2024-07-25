/ * Activity 1: Creating and Exporting Modules */

//* Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script. */

console.log("Importing add function from math.js ")

// 1st Method
// const add = require("./math");
// console.log(add(5,6));


// 2nd Method
import {add} from "./math.js";
console.log(add(9,10));


//* Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module. */

console.log("Importing the file from person.js");
import { perosn } from "./person.js";

console.log(`Name: ${perosn.name}`);
console.log(`Name: ${perosn.age}`);
perosn.greeting();


