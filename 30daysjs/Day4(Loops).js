// * Activity 1: For loop */

//* Task 1: Write a program to print numbers from 1 to 10 using for  loop */

for(let num = 1 ; num <=10 ; num++){   
    console.log(num);
}

//* Task 2: Write a program to print the multiplication of 5 using a for loop */

let multiply = 5;

for(let num = 1 ; num <= 10; num++){
    console.log(multiply + "*" + num + "=" + multiply*num);

}


//* Activity 2: While loop */

//* Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop */

let sum = 0;
let num = 1 ;

while(num <= 10){
    sum +=num;
    num++;
}

console.log("Sum of number from 1 to 10: ", sum);

//* Task 4: Write a program to print numbers from 10 to 1 using a while loop */

let score = 10;

while(score >= 1){
    console.log(score);
    score--;
}


//*  Activity 3: Do... While loop */

//* Task 5: Write a program to print numbers from 1 to 5 using a do... while loop */

let marks = 1;

do{
    console.log(marks);
    marks++;
}while(marks<=5);

//* Task 6: Write a program to calculate the factorial of a number using a do... while loop */

let num_1 = 7, fact = 1, i = 1;

do{
    fact *= i;
    i++;
}while( i<= num_1);

console.log(`The factorial of a ${num_1} is: `, fact);

//* Activity 4: Nested loop */

// * Task 7: Write a program to print the pattern using a nested for loop */

/*      *
        * *
        * * * 
        * * * *
        * * * * *     */

for(let i = 1; i <= 5; i++){
    let star = "";
    for(let j = 1; j <= i; j++){
        star += "* ";
    }
    console.log(star);
}


//* Activity 5: loop Control Statements */

//* Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement */

for(let num = 1; num <= 10; num++){
    if(num === 5){
        continue;
    }
    console.log(num);
}

//* Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement. */

for(let num = 1; num<=10;  num++){
    if(num === 7){
        break;
    }
    console.log(num);
}

