//* Activity 3 */

//* Task 5: Select an HTML element and remove it from the DOM. */

let elem = document.querySelector("#toremove")

//elem.parentNode.removeChild(elem)

elem.remove()


//* Task 6: Remove the last child of a specific HTML element. */

let list = document.getElementById("list_item")
 
    list.removeChild(list.lastElementChild);


