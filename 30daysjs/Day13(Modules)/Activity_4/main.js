/ * Activity 4: Using Third-Party Modules * /

//* Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module ina script. */

import _ from 'lodash';

const randomNumber = _.random(1, 100); 

console.log(`Random number between 1 and 100: ${randomNumber}`);


//* Task 7: Install a third-party module (e.g., axiox) using npm. Import and use this module to make a network rrquest in a script */

import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    
    console.log('Data fetched from API:', response.data);
  } catch (error) {
   
    console.error('Error fetching data:', error);
  }
}


fetchData();
