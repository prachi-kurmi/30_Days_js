//* Activity 1: Array Creation and Access */

//* Task 1: Create an array of numbers from 1 to 5 and log the array to the console. */

const my_arr = [1,2,3,4,5];
console.log(my_arr);

//* Task 2: Access the first and last elements of the array and log them to the console. */

const cars = new Array("Buggatti", "RollsRoyce", "BMW"); //Another method to declare array

//Arrays are accessed by zerro-indexed
console.log("The first element of array is: ",cars[0]); 
console.log("The last element of array is: ",cars[2]);


//* Activity 2: Array Methods (Basic) */

//* Task 3: Use the push method to add new number to the end of the array and log the updated array. */

cars.push("Supra");  //It add the element at the end 
console.log(cars);

//* Task 4: Use the pop method to remove the last element from the array and log the updated array. */

cars.pop() //It remove the last element
console.log(cars);

//* Task 5: Use the shift method to remove the first element from the array and log the updated array. */

let num = [1,2,3,4,5,6]
console.log(num);
num.shift()
console.log(num);

// [1,2,3,4,5] => [2,3,4,5] shift method removes the first element from num array

//* Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array */

let num_arr = [1,2,3,4,5,6,7]
console.log(num_arr)
num_arr.unshift("Chips");
console.log(num_arr);
// this method add the value in front of given array and due to this the indexing of array changes we try to avoid this kind of method


//* Activity 3: Array Methods (Intermediate) */

//* Task 7: Use the map method to create a new array where each number is doubled and log the new array. */

const number_array = [1,2,3,4,5,6,7,8,9,10];

let doubled_array = number_array.map((num) => {
    return num*2;
})

console.log(`Every number from array ${number_array}] get multipled by 2: `,doubled_array);


//* Task 8: Use the filter method to create a new array with only even numbers and log the new array. */

const even_odd = [1,2,3,4,5,6,7,8,9,10];

let even_array = even_odd.filter((num) => {
    return num%2==0;
})

console.log(`Even number from the [${even_odd}] are: `,even_array);


//* Task 9: Use the reduce method to calculate the sum of all the numbers in the array and log the result. */

//The reduce method in JavaScript transforms an array into a single value.
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

const my_nums = [1,2,3,4,5]

const total_num = my_nums.reduce(function(acc,currval){
    console.log(`Accumulator: ${acc} and Current Value: ${currval}`);
    return acc+currval;
},0) // Initial Value 

console.log("Sum of the element: ",total_num);
//First it takes the inital value (0) in accumulator and current value (1) from array and then perform addition and after that it takes the addition value (1) in 
//accumulator and and current value (2) and perfrom addition and so on.... It takes initial value only one time


//* Activity 4: Array Iteration */

//* Task 10: Use a for loop to iterate over the array and log the each element to the console. */

const books_array = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"];

for( i=0; i<5;  i++){
    console.log(`${i} element from the array is: `, books_array[i]);
}

//* Task 11: Use the forEach method to iterate over the array and log each element to the console. */

const coding_array = ["js", "ruby", "java", "cpp", "python"]

coding_array.forEach( (item, index) => {
    console.log(`${index} element of coding array is: `,item);
})


//* Activity 5: Multi-dimensional Arrays */

//* Task 12: Create a two-dimensional array (matrix) and log the entire array to the console. */

const two_dimensional = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log("Matrix is: ", two_dimensional);

//* Task 13: Access and log a specific element fromt the two-dimensinal array. */

console.log("Specific element from row 1 and col 1 is: ",two_dimensional[1][1]);
console.log("Specific element from row 2 and col 1 is: ",two_dimensional[2][1]);

