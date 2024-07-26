/ * Activity 1: Class Definition * /

//* Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. */

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, ${this.name} welcome to the website.`
    }

    //Task 2
    update_age(){
        return `${this.name} you are going to ${this.age+1} years old on your next Birthday. `
    }

    //Task 5
    static generic_greet(){
        return "Hello from the Person generic greet method"
    }
}

const person = new Person("Alice", 25);

console.log(person.greet());

//* Task 2: Add a method to the Person class that updates the age property and logs the updated age. */

console.log(person.update_age());



/ * Activity 2: Class Inheritance * /

//* Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the Student ID. */

class Student extends Person{

    static number_of_student = 0; // Task 6
    constructor(name, age,studentID){
        super(name,age)
        this.studentID = studentID;

        Student.number_of_student += 1;
    }

    student(){
        return `Hello, ${this.studentID} is StudentId from Student class.`
    }

    //Task 4
    greet(){
        return `Good Evening ${this.name} your student id is ${this.studentID}`
    }
}

const Demon = new Student("Demon", 20, "SID123")

console.log(Demon.student());
//console.log(Demon.name);



//* Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overriden greeting message. */

const Elena = new Student("Elena",  23, "SID346");

console.log(Elena.greet());



/ * Activity 3: Static Methods and Properties * /

//* Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message. */

console.log(Person.generic_greet());

//* Task 6: Add a static property to the Student class to keep track of the number of students created. Incement this property in the constructor and log the total number of students. */

console.log(`Total number of students: ${Student.number_of_student}`);

const David = new Student("David", 27, "SID987");

console.log(`Total number of students: ${Student.number_of_student}`);



/ * Activity 4: Getters and Setters * /

//* Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. */

class Person2{
    constructor(firstName , lastName){
        this.firstName  =  firstName;
        this.lastName = lastName;
    }

    //1st way

    get FullName(){
        return `Full Name is: ${this.firstName} ${this.lastName}`
    }

    // Task 8 (1st way)
    set FullName(name){
        const[firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName
    }
}


// 2nd way 
/* Object.defineProperty(Person2.prototype, "FullName",{
    get: function(){
        return `Full Name is: ${this.firstName} ${this.lastName}`
    }
}); */

const person1 = new Person2("James", "Anderson")

console.log(person1.FullName);

//* Activity 8: Add a setter method to the Person class to  update the name properties(firstName and lastName). Update the name using the setter and log the updated full name. */

//2nd way
/* Object.defineProperty(Person2.prototype, "FullName",{
    set: function( name ){
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}) */

person1.FullName = ("William Shakespeare")
console.log("Updated Name :",person1.FullName);



/ * Activity 5: Private Fields (Optional) * /

//* Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated throught these methods. */

class Account {

    #balance   // Private Field

    constructor(initial_balance = 0){
        this.#balance = initial_balance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited amount is:${amount} and Updated balance is: ${this.#balance}`);
        } else{
            console.log("Deposit amount must be greater than zero");
        }
    }

    withdraw(amount){
        if(amount >0 && this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Withdrew amount is: ${amount} and new balance is: ${this.#balance}`);
        }else if(amount > this.#balance){
            console.log(`Insufficent Balance to withdraw present amount is: ${this.#balance}`);
        } else{
            console.log("Withdraw amount must be greater than zero");
        }
    }

    getbalance(){
       console.log(`Current Balance is: ${this.#balance}`);
    }
}


//* Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging this balance after each operation. */

const personAccount = new Account(100);

personAccount.getbalance()  // 100

personAccount.deposit(50) //Deposited amount is:50 and Updated balance is: 150

personAccount.withdraw(100) //Withdrew amount is: 100 and new balance is: 50

personAccount.withdraw(100) //Insufficent Balance to withdraw present amount is: 50

personAccount.deposit(0) //Deposit amount must be greater than zero

//console.log(personAccount.#balance);//  ERROR : Property #balance is not accessible outside class because it declare as a private

