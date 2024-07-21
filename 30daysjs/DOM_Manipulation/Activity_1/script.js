//* Activity 1: Selecting and Manipulating Elements */

//* Task 1: Select an HTML element by its ID and change its text content. */

let heading_one = document.getElementById("heading1")

heading_one.innerHTML = "Change the text content from lorem5"


//* Task 2: Select an HTML element by its class and change its background color. */

let container = document.getElementsByClassName('container')

container[0].style.backgroundColor = 'green'

//Since getElementsByClassName gives you a collection, even if there’s only one element, it’s still part of a collection. '[0]' accesses the first element in this collection, just like accessing the first item in an array.


