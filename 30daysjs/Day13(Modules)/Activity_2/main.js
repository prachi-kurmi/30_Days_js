/ * Activity 2: Named and Default Exports * /

//* Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script. */

console.log("Importing file from math_functions.js");

import{ add, sub, multiply } from "./math_functions.js"

console.log(add(9,10));
console.log(sub(5,5));
console.log(multiply(9,3));


//* Task 4: Create a module that exports a single function using default export. Import and use this function in another script. */

console.log("Importing the files from greet.js");

import greeting from "./greet.js";

console.log(greeting("Alice"));
console.log(greeting("Bob"));



