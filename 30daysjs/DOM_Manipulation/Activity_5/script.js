//* Activity 5: Event Handling */

//* Task 9: Add a click event listener to a button that changes the text content of a pragraph. */

const button = document.querySelector("#btn")

button.addEventListener('click', function(){
    button.textContent = "You're going to make a choice today that will have a direct impact on where you are five years from now. The truth is, you'll make choice like that every day of your life. The problem is that on most days, you won't know the choice you make will have such a huge impact on your life in the future. So if you want to end up in a certain place in the future, you need to be careful of the choices you make today."
});


//* Task 10: Add a mouseover event listener to an element that changes its border color. */

const para = document.getElementById("paragraph")

para.addEventListener('mouseover', function(){
    para.style.border = "2px solid green"
})

