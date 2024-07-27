/ * Activity 1: Understanding Closures */

//* Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. */

function outer_function(){

    const outer_var = "Hello, Outer Variable"

    function inner_function(){
        return outer_var;
    }

    return inner_function;
}

const my_func = outer_function();

console.log(my_func());


//* Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter. */

function create_counter(){

    let counter = 0;

    function increment(){
        counter++;
    }

    function get_counter(){
        return counter;
    }

    return { increment , get_counter}
}

const my_counter = create_counter()

console.log("Counter variable before increment: ", my_counter.get_counter());

my_counter.increment();
my_counter.increment();

console.log("Conter variable after increment:",my_counter.get_counter());



/ * Activity 2: Pracitcal Closures */

//* Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call. */

function create_ID(){

    let last_ID = 0;

    function generate_ID(){
        last_ID++;
        return last_ID;
    }

    return generate_ID;
}


const get_ID = create_ID();

console.log("ID is increment after every call: ", get_ID());
console.log("ID is increment after every call: ", get_ID());
console.log("ID is increment after every call: ", get_ID());


//* Task 4: Create a closure that captures a user's name and returns a function that greet the user by name. */

function create_greet(name){

    function greet(){
        return `Hello, ${name} welcome to the website!`;
    }

    return greet;
}

const James = create_greet("James");
console.log(James());

const Elena = create_greet("Elena");
console.log(Elena());



/ * Activity 3: Closures in Loops */

//* Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. */

function create_array(size){

    const function_array = [];

    for(let i=0; i<size; i++){
        function_array.push((function(index){
            return function(){
                console.log(`Function index: ${index}`);
            }
        })(i));
    }

    return function_array;
}

const func = create_array(5);

func.forEach( func => func());



/ * Activity 4: Module Pattern * /

//* Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items. */

function create_item(){

    const items = [];

    function add_item(item){
        items.push(item);
    }

    function remove_item(index) {

        if(index >= 0 && index < items.length){
            items.splice(index,1);
        }else{
            console.log("Invalid index to remove");
        }
    }

    function list_items(){
        console.log("Items are added: ", items);
    }

    return { add_item, remove_item, list_items}
}

const my_item = create_item();

my_item.add_item("Biscuits");
my_item.add_item("cookies");
my_item.add_item("candy");

my_item.list_items(); //Items are added:  [ 'Biscuits', 'cookies', 'candy' ]

my_item.remove_item(1); //Items are added:  [ 'Biscuits', 'candy' ]
my_item.list_items();

my_item.remove_item(5);//Invalid index to remove



/ * Activity 5: Memoization * /

//* Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations. */

function memoize(fun){

    const cache = {};

    return function(arg){
        if(cache[arg] !== undefined){
            return cache[arg];
        }

        const result = fun(arg);
        cache[arg] = result;
        return result;
    }
}

function square(num){
    return `Square of number ${num} is: ${num*num}`;
}

const memozied_square = memoize(square);

console.log(memozied_square(4)); //computed
console.log(memozied_square(4)); // from cache

//* Task 8: Create a memoized version of a function that calculates the factorial of a number.  */

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoized_fact = memoize(factorial);

console.log("Factorial is: ",memoized_fact(5));
