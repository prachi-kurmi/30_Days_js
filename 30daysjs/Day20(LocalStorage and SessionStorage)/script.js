/ * Activity 1: Understanding LocalStorage */

//* Task 1: Write a script to save string value to localStorage and retrieve it. Log the retrieved value. */

localStorage.setItem('string', 'Hello LocalStorage');
const get_value = localStorage.getItem('string')
console.log(get_value);


//* Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it. */

const user = {
    name: "Demon",
    email: "Demon@gmail.com",
    age:27
}

const json_string = JSON.stringify(user);
localStorage.setItem("userData", json_string);

const get_string = localStorage.getItem('userData');
const parse_user = JSON.parse(get_string);
console.log(parse_user);



/ * Activity 2: Using LocalStorage */

//* Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load. */

window.onload = function() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;

        document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;
    }
};

// Function to save form data to localStorage
function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

//* Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal. */

localStorage.setItem('key', 'Demon');
console.log('Before removal:', localStorage);

localStorage.removeItem('key');
console.log('After removal:', localStorage);


/ * Activity 3: Understanding SessionStorage */

//* Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved data. */

sessionStorage.setItem('string', 'Hello sessionStorage');
const get_value_2 = sessionStorage.getItem('string')
console.log(get_value_2);


//* Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object then log it. */

const user_2 = {
    name: "Elena",
    email: "elena@gmail.com",
    age:27
}

const json_string_2 = JSON.stringify(user_2);
sessionStorage.setItem("userData", json_string_2);

const get_string_2 = sessionStorage.getItem('userData');
const parse_user_2 = JSON.parse(get_string_2);
console.log(parse_user_2);



/ * Activity 4: Using SessionStorage */

//* Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load. */

window.onload = function() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');

    if (name && email) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;

        document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;
    }
};

// Function to save form data to sessionStorage
function saveData() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;

    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}


//* Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal. */

localStorage.setItem('key', 'Elena');
console.log('Before removal:', localStorage);

localStorage.removeItem('key');
console.log('After removal:', localStorage);


/ * Activity 5: Comparing LocalStorage and SessionStorage */

//* Task 9: Write a function that accepts a key and value, and saves the value to both localStorage and sessionStorage. */

function saveStorage(key, value) {
    const jsonString = JSON.stringify(value);

    // Save to localStorage
    localStorage.setItem(key, jsonString);

    // Save to sessionStorage
    sessionStorage.setItem(key, jsonString);

    const localValue = localStorage.getItem(key);


    const sessionValue = sessionStorage.getItem(key);

    
    console.log("Local value", localValue);
    console.log("Session Value",sessionValue);
}

const user_3 = {
    name: "John",
    email: "john@goggle.com",
    age: 30
};

saveStorage("user", user_3);


//* Task 10: Write a function that clears all data from both localStorage ans sessionStorage. Verify that both storages are empty. */

function clearStorage() {
    // Clear localStorage
    localStorage.clear();
    console.log("localStorage cleared.");

    // Clear sessionStorage
    sessionStorage.clear();
    console.log("sessionStorage cleared.");

    
    verifyStorage();
}

// Function to verify that both storages are empty
function verifyStorage() {
    
    if (localStorage.length === 0) {
        console.log("localStorage is empty.");
    } else {
        console.log("localStorage is not empty.");
    }

    if (sessionStorage.length === 0) {
        console.log("sessionStorage is empty.");
    } else {
        console.log("sessionStorage is not empty.");
    }
}

clearStorage();
