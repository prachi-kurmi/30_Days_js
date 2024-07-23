/ * Activity 1: Understanding Promises * /

//* Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console. */

const  promise_one = new Promise( function (resolve, reject){
    
    setTimeout(function(){
        resolve(" This Message is resolved after 2 sec");
    },2000)
});

promise_one.then( function(msg){
    console.log(msg);
});

// * Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() */

const  promise_two = new Promise( function (resolve, reject){
    
    setTimeout(function(){
        reject("Error: This Message is rejected after 2 sec");
    },2000)
});

promise_two.catch( function(msg){
    console.log(msg);
});



/ * Activity 2: Chaining Promises * /

//* Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific oreder. */

const promise_three = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetching username: David from server 1");
    }, 1000);
});

const promise_four = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetching email: david@gmail.com from server 2");
    }, 2000);
});

const promise_five = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetching age: 27 from server 3");
    }, 2500);
});

promise_three
    .then((msg) => {
        console.log(msg);
        return promise_four;
    })
    .then((msg) => {
        console.log(msg);
        return promise_five;
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log("Error:", error);
    });



/ * Activity 3: Using Async Await * /

//* Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value. */

const promise_six = new Promise( function(resolve, reject){

    setTimeout(() => {
        resolve("Promise resolved with value: Hello, world!");
    }, 2000);

});

async function consume_promise(){

    try {
        const response = await promise_six;
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }

}

consume_promise();


//* Task 5: Write an async fucntion that handles a rejected promise using try-catch and logs the error. */


const promise_seven = new Promise(function(resolve , reject){

    setTimeout(function(){
        let error = true

        if(!error){
            resolve(" Promise is passed without error")
        }
        else{
            reject('ERROR: Promise is rejected due to error')
        }
    }, 2000)
})

async function consume_promise_seven (){
    try {
        const response = await promise_seven
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consume_promise_seven();


/ * Activity 4: Fetching Data from an API * /

//* Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. */

fetch("https://jsonplaceholder.typicode.com/albums/1")
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        console.log("GETTING USERID, ID, TITILE FROM PUBLIC API");
        console.log(data);
    })
    .catch( (error) => console.log(error))


//* Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/ await. */


async function get_all_users() {

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json();
        console.log("GETTING ALL THE USER DATA FROM API");
        console.log(data);
    }catch(error){
        console.log( "ERROR: ", error);
    }
};

get_all_users();



/ * Activity 5: Concurrent  Promises */

//* Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values. */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from promise 1");
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from promise 2");
        //reject("Data from promise 2")
    }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from promise 3");
    }, 5000);
});


Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One or more promises were rejected:', error);
    });


//* Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises. */

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log('First promise resolved:', result);
    })
    .catch((error) => {
        console.error('One of the promises was rejected:', error);
    });

