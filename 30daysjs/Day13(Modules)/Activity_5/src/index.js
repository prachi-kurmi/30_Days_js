/ * Activity 5: Module Bundling (Optional) */

//* Task 8: Use a module bundle like Webpack or Parcel to bundle mutilple Javascript files into a single file. Write a script to demonstrate the bundling process. */


console.log("Impoting the files from module1.js and module2.js By use of Webpack");
import { greet } from './module1.js';
import { farewell } from './module2.js';

console.log(greet('Alice'));
console.log(farewell('Bob'));
