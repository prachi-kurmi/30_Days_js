// * Activity 1: If-Else Statements */

// * Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console */

let num_1 = -344

if(num_1 < 0){
    console.log(`The number ${num_1} is negative`);
}
else if(num_1 === 0){
    console.log(`The number ${num_1} is zero`);
}
else{
    console.log(`The number ${num_1} is positive`);
}


//* Task 2: Write a program to check if a person is eligible to vote (age>=18) and log the result to the console */

let age = 23;

if(age < 18){
    console.log(`Person age is ${age} not eligible to vote`);
}
else{
    console.log(`Person age is ${age} eligible to vote`);
}


//* Activity 2: Nested If-Else Statements */

//* Task 3: Write a program to find the largest of three numbers using nested if-else statements */

let score_1 = 25, score_2 = 67, score_3 = 40

if(score_1 >= score_2){

    if(score_1 >= score_3){
    console.log(`Player 1 has highest score ${score_1}`);
    }else{
        console.log(`Player 3 has the highest score ${score_3}`);
    }
}
else{

    if(score_2 >= score_3){
    console.log(`Player 2 has highest score ${score_2}`);
    }else{
    console.log(`Player 3 has the highest score ${score_3}`);
   }
}


//* Activity 3: Switch Case */

//* Task 4: Write a program that uses a switch case to determine the day of week based on a number (1-7) and log the day name to the console */

let week_day = 7

switch(week_day){

    case 1: console.log("1 is Monday");
    break;

    case 2: console.log("2 is Tuesday");
    break;

    case 3: console.log("3 is Wednesday");
    break;

    case 4: console.log("4 is Thursday");
    break;

    case 5: console.log("5 is Friday");
    break;

    case 6: console.log("6 is Saturday");
    break;

    case 7: console.log("7 is Sunday");
    break;

    default: console.log("Enter a valid week day");
}

//* Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on score and log the grade to the console*/

let score = 98

switch (true) {

    case (score >= 90 && score <= 100): console.log(`Grade is A (${score})`);
    break;

    case (score >= 80 && score < 90) : console.log(`Grade is B (${score})`);
    break;

    case (score >= 70 && score < 80):console.log(`Grade is C (${score})`);
    break;

    case (score >= 55 && score < 70) : console.log(`Grade is D (${score})`);
    break;

    case (score >= 0 && score < 60):console.log(`Grade is F (${score})`);
    break;

    default : console.log("Enter a valid score between 0 and 100");
}

//* Activity 4: Conditional (Ternary) Operator */

//* Task 6: Write a program that uses the ternary operator to check if a number is even or odd log result to the console */

let even_odd = 3

even_odd % 2 == 0 ? console.log(`Number is even ${even_odd}`) : console.log(`Number is odd ${even_odd}`);

//* Activity 5: Combining Conditions */

//* Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divided by 400) and log the result to the console */

let leap_year = 2096

if(leap_year % 400 == 0){
    console.log(`${leap_year} is leap year`);
}else if(leap_year % 4 == 0 && leap_year % 100 !=0){
    console.log(`${leap_year} a leap year`);
}else{
    console.log(`${leap_year} not a leap year`);
}

// Kuch century (1700, 1800, 1900, ...) year jo 4 se divide hote hai but leap year nhi hote
// 1200 divide by 400 so it is a leap year
// 2100 not divide by 400 so not a leap year
// 2096 not divisible by 400 but divisible by 4 so it is a leap year
 
