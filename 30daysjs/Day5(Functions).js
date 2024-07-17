//* Activity 1: Function Declaration */

//* Task 1: Write a function to check if a number is even or odd and log the result to the console. */

function even_odd ( num){
    if(num%2==0){
        return `The number is even ${num}`;
    }else{
        return `Number is odd ${num}`;
    }
}

let result = even_odd(3);

console.log("Result: ", result);


//* Task 2: Write a function to calculate the square of a number and return the result */

function square_number (num){
    let result = num*num;
    return result;
}

console.log("Square of a number is: ", square_number(3));



//* Activity 2: Function Expression */

//* Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. */

function maximum_number(num_1 , num_2){
    if(num_1 > num_2){
        console.log(`Number ${num_1} is greater than Number ${num_2}`);
    }else{
        console.log(`Number ${num_2} is greater than Number ${num_1}`);
    }
}
 
maximum_number(3,4);
maximum_number(5,7);

//* Task 4: Write a function expression to concatenate two strings and return the result. */

function concatenate_string (str_1, str_2){
    let result = str_1 + str_2;
    console.log(`Concatenation of two string '${str_1}' and '${str_2}' : `, result);
    return result;
}

concatenate_string("Musical", "Life");
concatenate_string("Go", "ahead");



//* Activity 3: Arrow Functions */

//* Task 5: Write an arrow function to calculate the sum of two numbers and return the result. */

// Suntax of arrow function : () => {}

const sum_number = (num_1,num_2) => {
    let result = num_1+num_2;
    console.log(`Sum of two number '${num_1}' and '${num_2}' is: `, result);
    return result
}

sum_number(4,5)
sum_number(10,11)


//* Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value. */

// Solve it by using for loop
const contains_character = (str, char) => {
    for(let i=0; i<str.length; i++){
        if(str[i] === char){
           return true;
        }
    }
    return false;
}

console.log("Is character present: ",contains_character("Hello", 'o'));
console.log("Is Character present: ",contains_character("Hello", 'z'));

//Solve it by using includes method

const contains_character_two = (str, char) =>{
    if(str.includes(char)){
        return true;
    }else{
        return false;
    }
}

console.log("Is character present: ", contains_character_two("Wind Breaker", 'r'));
console.log("Is character present: ", contains_character_two("Wind Breaker", 'w'));


//* Activity 4: Function Parameters and Default Values */

//* Task 7: Write a function that takes two parameters and return their product. Provide a default value to second parameter. */

const product_number = (num_1, num_2 = 5) => {
    let result = num_1*num_2;
    console.log(`Product of two number '${num_1}', '${num_2}': `, result);
    return result;
}

product_number(5,10) 
product_number(3) // Multiply by default value


//* Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default values for the age. */

function greeting_person (user, age = 28){
    console.log(`Good Morning ${user},`, "Age: ",age);
}

greeting_person('Katherine', 20)
greeting_person('Demon') // Takes the default value



//* Activity 5: Higher-Order Functions */

//* Task 9: Write a higher-order functions that takes a function and a number, and calls the function that many times */

function sayhello(num){
    console.log(`Called ${num}: Hello`);
}

function count_functions (sayhello, num){
    for( i=1; i<=num; i++){
        sayhello(i);
    }
}

count_functions(sayhello , 5)


//* Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. */

function two_function_value(funct1, funct2, value){

    const result_1 = funct1(value);

    const result_2 = funct2(result_1);

   console.log("Final answer is:");
   return result_2;
}

function funct1(num){
    let result = num*2;
    console.log(`Function one is called and multiply the ${num} by 2: `, result);
    return result;
}

function funct2(num){
    let result = num+5;
    console.log(`Function two is called and add the ${num} to 5: `, result);
    return result;
}

console.log(two_function_value(funct1, funct2, 5));;

