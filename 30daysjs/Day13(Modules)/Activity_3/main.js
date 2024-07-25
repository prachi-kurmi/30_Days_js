/ * Activity 3: Importing Entire Module * /

//* Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. */

console.log("Importing from math_utlis.js");

import * as utils from './math_utils.js';

console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);

console.log(utils.square(4));
console.log(utils.cube(3));
