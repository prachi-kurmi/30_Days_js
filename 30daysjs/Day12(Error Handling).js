/ * Activity 1: Basic Error Handling with Try-Catch. */

//* Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. */

function throw_error(){

    try{
       throw new Error("This error is thrown intentionally.");
      
    } catch(error){
        console.log("Caught an error: " + error.message);
    }
}

throw_error();


//* Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error. */


function check_denominator( num1, num2 ){
        
    if( num2 === 0){
        throw new Error("Denominator cannot be zero.")
    }

    return num1/num2;

}

function divide_number( num1, num2 ){

    try{
        let result = check_denominator( num1, num2 );
        console.log(`NUM 1:${num1} is divide by NUM 2:${num2}: `, result);
    } catch (error){
        console.log("ERROR: " + error.message);
    }
}


divide_number(10,2);
divide_number(10,0);



/ * Activity 2: Finally Block * /

//* Task 3: Write a script that includes a try-catch block and a finally block. Log message in the try, catch, and finally blocks to observe the execution flow. */

function subtract_number( num1, num2 ){
    try {
        console.log("Inside the try block: Performing division");
    
        if( num2<0 ){
            throw new Error("Num 2 cannot be negative.")
        }
        
        let result = num1 - num2;
        console.log(`Num 1:${num1} - Num 2:${num2}: `, result);
    } catch (error) {
        console.log(`Caugth an error:${error.message}`);
    } finally{
        console.log("Inside the finally block this block will always execute");
    }
    
}

subtract_number(3, 4)
subtract_number(2, -1);



/ * Activity 3: Custom Error Objects * /

//* Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block. */

class Custom_Error extends Error {
    constructor(message) {
        super(message);
        this.name = "Custom_Error"; 
    }
}

function throw_customerror() {
    throw new Custom_Error("Something went wrong!"); 
}

try {
    throw_customerror();
} catch(error) {
    if(error instanceof Custom_Error) {
        console.error(`Custom error occurred: ${error.message}`);
    }
}

//* Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. */


function check_string( input ) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Input cannot be empty or non-string.');
    }
    return 'Input is valid!';
}


function print_string( input ) {
    try {
        const result = check_string( input );
        console.log(result);
    } catch (error) {
        console.error(`Error caught: ${error.message}`);
    }
}

print_string( ); 
print_string('Books');
print_string(123);



/ * Activity 4: Error Handling in Promises * /

//* Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console. */

const  promise_one = new Promise( function (resolve, reject){
    
    const random = Math.random(); 

    setTimeout( function(){
        if (random > 0.5) {
            resolve('Promise resolved successfully!');
        } else {
            reject(new Error('Promise rejected due to a random failure.'));
        }
    },1000)       
});

promise_one.then(result => {
    console.log(result); 
})
.catch(error => {
    console.error(`Error caught: ${error.message}`); 
});

//* Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message. */

async function handle_promise() {
    try {
        const result = await promise_one;
        console.log(result);
    } catch (error) {
        console.error(`Error caught: ${error.message}`); 
    }
}

handle_promise();



/ * Activity 5: Graceful Error Handling in Fetch * /

//* Task 8: Use the fetch API to request data from invalid URL and handle the error using .catch(). Log an appropriate error message to the console. */

fetch("https://invalid-url.example.com/data")
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        console.log("GETTING USERID, ID, TITILE FROM PUBLIC API");
        console.log(data);
    })
    .catch(error => {
        console.error(`Error caught from invalid URL: ${error.message}`);
    });


//* Task 9: Use the fetch API to request data from invalid URL within an async function and handle the error using try-catch. Log an appropriate error message to the console. */


async function get_all_users() {

    try{
        const response = await fetch("https://invalid-url.example.com/data")

        const data = await response.json();
        console.log("GETTING ALL THE USER DATA FROM API");
        console.log(data);
    }catch(error){
        console.log(`Error caught from invalid URL: ${error.message}`);
    }
};

get_all_users()


