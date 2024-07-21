//* Activity 2: Creating and Appending Elements  */

//* Task 3: Creating a new div element with some text content and append it to the body */

let new_div = document.createElement('div')

new_div.textContent = "Josh had spent year and year accumulating the information. He knew it inside out and if there was ever anyone looking for an expert in the field, Josh would be the one to call."

document.body.appendChild(new_div)


//* Task 4: Create a new li element and add it to an existing ul list. */

let new_li = document.createElement("li")
new_li.textContent = "Javascript"

document.querySelector("#list_item").appendChild(new_li)
