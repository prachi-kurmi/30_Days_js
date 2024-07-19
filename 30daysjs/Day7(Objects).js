//* Activity 1: Object Creation and Access */

//* Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console. */

const books_object = {

    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937

}

console.log(books_object);

//* Task 2: Access and log the title and author properties of the book object. */

//Access through dot operator
console.log("The tite of book is: ",books_object.title);

//Access through square bracket notation
console.log("The author of book is: ", books_object["author"]);

// Dot operator: When the property name is a valid identifier (consists of letters, digits, underscores, and dollar signs, and does not start with a digit).
//Square Bracket Notation: When the property name is not a valid identifier (e.g., contains spaces, starts with a digit) or is dynamically determined (e.g., stored in a variable).


//* Activity 2: Objects Methods */

//* Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. */


books_object.get_title_author = function(){
    console.log(`Book title: ${books_object.title} and Book author: ${books_object.author}`);
}

books_object.get_title_author();

//* Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object. */

books_object.get_year = function(year){
    books_object.year = year;
}

books_object.get_year(2024)
console.log(books_object);


//* Activity 3: Nested Objects */

//* Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. */

const library = {
    name : "Public Library",
    books : [
        { title: "The Alchemist", year: 1988 },
        { title: "The Road", year: 2006 },
        { title: "Life of Pi", year: 2001 },
        { title: "The Kite Runner", year: 2003 },
        { title: "Becoming", year: 2018 }
    ]
}

console.log("List of Library Book: ", library);

//* Task 6: Access and log the name of the library and the titles of all the books in the library. */

console.log(`The name of library is: ${library.name}`);

library.books.forEach((item, index)=> {
    console.log(`${index+1} : ${item.title}`);
})


//* Activity 4: the this keyword */

//* Task 7: Add a method to the book object and uses the this keyword to return with the book's title and year, and log the result of calling this method. */

books_object.get_title_year = function(){
    console.log(`Book title: ${this.title} and Book year: ${this.year}`);
}

books_object.get_title_year();


//* Activity 5: Object Iteration */

//* Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value */

let book = {

    title: "Educated",
    author: "Tara Westover",
    year: 2018
}

for (let property in book) {
    console.log(property + ":" + book[property]);
}

//* Task 9: Use object.keys and object.values methods to log all the keys and values of the book object. */

console.log("Keys of book object: ",Object.keys(book));
console.log("Values of book object:",Object.values(book));

