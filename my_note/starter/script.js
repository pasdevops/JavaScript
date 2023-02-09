// All JavaScript need to linked to HTML

/*
Javascript values and variables
-Values are piece of data.
-Values are smallest unit of information you have in JS
-Fundermental unit of information in programing 

Values e.g. = age, name and jobs

let js = "amazing";
console.log(40 + 8 + 23 - 10); = 61 

Example of Different values = Jonas and 23
console.log("Jonas");
console.log(23);

Values are stored as a VARIABLE and re use them over and over again.

E.g of declaring a variable 
let firstName = "Matilda";

Declaring variable x 3 
console.log(firstName);
console.log(firstName);
console.log(firstName);

To output things on the browser use console.log();
or 
How to see results for code in the Browser by using  called console.log 


let country = "Indonesia";
let continent = "Asia";
let population = "500000"

console.log(country);
console.log(continent);
console.log(population);

Naming convention and variables 
Carmel Case is the used for variable in JS naming convention

In line script
In line script means you dont need to create a separate file

JavaScript Reserved Words
https://www.w3schools.com/js/js_reserved.asp

NAME IS A RESERVED KEY WORDS 
No upper case in JS start words
*/

/* Primitive Data Types

There are eight basic data types in JavaScript. They are:

Data Types	Description	Example

String	represents textual data	'hello', "hello world!" etc

Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.

BigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.

Boolean	Any of two values: true or false	true and false

undefined	a data type whose variable is not initialized	let a;

null	denotes a null value	let a = null;

Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');

Object	key-value pairs of collection of data	let student = { };

Here, all data types except Object are primitive data types, whereas Object is non-primitive.
*/

/*Dynamic typing - means changing  a type of a value that is hold by a variable

- e.g. To assing a vaibale you use LET.

let javascriptIsFun = true; = boolean
console.log(javascriptIsFun);

-To rewrite same code without "LET"
-This is to assign a new values to an already existing variables. 
-This is changing name that is already in the initial variable to a new variable.
-To change from TRUE to YES.

javascriptIsFun = "YES"; 
console.log(typeof javascriptIsFun); = string


Undefined values 
When you define empty variable the values will be undefined and the typeof will undefined
Undefined is both the value and the type

e.g. of emty varaibale holds vales undefined 
let year;
console.log(year);
console.log(typeof year);

Re assign a variable without a LET because your not creating a new variable
year = 1991;
console.log(typeof year); = number

Error that exist in the type of operator 
e.g.
console.log(typeof null);
null is a type of data type = object 
null is a bug in JS 
*/

/* Variable declaration
JS Methods useed to declare variables using keywords such as var, let, and const.
Each keyword has its own functionality that varies according to the requirements.


Declaring a variable 

3 ways of declaring variables in JS = let, const and var.

-let = Block scoped, which means that they are available only in the block in which they were declared.
let alloow variable TO BE  mutable - values that can change.

e.g. Age can change

let allows variable to re assign variables 
let allows empty variables to be acompanied 

let age = 30;
age = 31;

-const = varibales that are not allowed to be changed - immutable
e.g birth year cannot change.
Use CONST as a default to write code in JS.
Use LET when 100% variable can change in a code.

const birthYear = 19991;
birthday = 1990;


-var = Old ways of declaring JS
function scope

var job = "programer";
job = "teacher";
*/

/*
Basic Operators

An operator is a sign or symbol that specifies the type of calculation to perform within an expression. 
There are mathematical, comparison, logical, and reference operators.
Access supports a variety of operators, including arithmetic operators such as +, -, multiply(*), and divide(/).
In addition to comparison operators for comparing values, text operators for concatenating text,
and logical operators for determining true or false values.

Types of JavaScript Operators
There are different types of JavaScript operators:
https://www.w3schools.com/js/js_operators.asp

Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Conditional Operators
Type Operators


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018
console.log(ageJonas, ageSarah);

You can  diff values at thesame time console log
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);


Operator precedence
Operator precedence determines how operators are parsed concerning each other. 
Operators with higher precedence become the operands of operators with lower precedence.

    e.g.Arthmetics operators have higher precedence than comparison operators 
    Also some right to left or left to right

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 

https://www.w3schools.com/js/js_precedence.asp

*/

/* Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// Solutions
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//const markHigherBMI = BMIMark > BMIJohn;
//console.log(BMIMark, BMIJohn, markHigherBMI);

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;

//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//const markHigherBMI = BMIMark > BMIJohn;
//console.log(BMIMark, BMIJohn, markHigherBMI);

/* Strings and Template Literals ES6 FEATURES

Important part of programming

Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let text = `Hello World!`;

Quotes Inside Strings - With template literals, you can use both single and double quotes inside a string:
let text = `He's often called "Johnny"`;

Multiline Strings - Template literals allows multiline strings:
let text =
`The quick
brown fox
jumps over
the lazy dog`;

Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation.
The syntax is:
${...}

Variable Substitutions
Template literals allow variables in strings:
Example
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
*/

// Without Template literals

//Declared variable

//const firstName = 'Jonas';
//const job = 'teacher';
//const birthYear = 1991; //use birth year to calculate age
// year = 2037;

// use same quote from for each code either "" or ''
//const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!'; console.log(jonas);

// With Template Literals
// Assembling multiple pieces into one final piece.
// Back-ticks is used for template literals
// Above TAB KEY WINDOWS = back-ticks
// With template literals you make use of $ (interpolation)
// With templaate literals you assembles STRINGS, eliminate the add sign and space

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991; //use birth year to calculate age
year = 2037;

const jonasNew = `I'm ${firstName}, ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
*/

// Back-ticks is used for ALL STRINGS FOR ANY VARIABLE.
// E.g.
//console.log(`Just a regular string`);

// Back-ticks is used for ALL STRINGS FOR MULTILINE
// E.g.

// OLD WAYS
// console.log(`String with \n\
// multiple \n\
// lines`);

//NEW WAYS WITH STRING LITERALS
//console.log(`String
//multiple
//lines`);

// Taking Decisions: if / else Statements

// Code used to check if Sarah is of Age to get a drivers licence or not and her age is 19years
// If she is allowed then she can start driving or not.
// Legal age to drive in UK 18
// To make that decision age has to be GREATER THAN OR EQUAL TO 18YEARS OF AGE.

/* Example One

First declare your variables
Syntax for JS IF STATEMENT
Start with if
Open and close parenthesis brackets = conditions to be evaluated will be there
Open curly brackets = overall run code if based on conditions inside parenthesis.
Condition has to be a boolean value

Initial stage 
when age is 19 years

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log ('Sarah can start driving liceonce now');
}

When you added the proper syntax

const age = 19;
if (age >= 18) {
    console.log ('Sarah can start driving liceonce now');
}
*/

// Example Two

// First declare your variables.
// Syntax for JS IF STATEMENT
// Start with if
// Open and close parenthesis brackets = conditions to be evaluated will be there
// Open curly brackets = overall run code if based on conditions inside parenthesis.
// Condition has to be a boolean value

// When age is 15years = no response

// const age = 15;
// if (age >= 18) {
//console.log ('Sarah can start driving liceonce now');
//}

// When age is 15 years PLUS ELSE STATEMENT
// Else block needs to have its own curl braces block at the end of if curly braces block
// Else block is always optional.

/* Example one

const age = 15;
if (age >= 18) {
    console.log('Sarah can start driving liceonce now');
} else { 
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years`);
}
*/

// Example two - Creating a variable conditionally without console.log
// Variable declared inside a block will not accessible outside the block.

/*const birthYear = 1998;
let century;

if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century); //= variable declared inside one of the block will not be accesscible
*/

/*
const birthYear = 2012;
let century;

if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century); //= variable declared inside one of the block will not be accesscible
*/

/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark})is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn})is higher than John's (${BMIMark})!`);
}
*/

//Type Conversion and Coercion

//What is Type Coercion in JavaScript?
//Type coercion is the automatic or implicit conversion of values from one data type to another.
//For example, converting a string value to an equivalent number value.
//It is also known as type conversion.

//Example one - string value conversion
//const inputYear = "1991"; // string
//console.log(inputYear + 18);

// Conversion - MANUAL TYPE OF CONVERSION
//const inputYear = "1991"; // string conversion
//console.log(Number(inputYear), inputYear);
//console.log(Number(inputYear) + 18);

// Converting into something that is not possible to convert.
//console.log(Number("Jonas")); // output = NaN
//console.log(typeof NaN);

//Always start a function with a capital e.g. Number, String
// JS can only convert, NUMBER, STRING AND BOOLEAN
//console.log(String(23), 23)

//Conversion - COERCION
// JS RESPONSIBILTY
// COERCION DEALS WITH ONE DATA TYPE TO ANOTHER
// CONVERSION OCCURS SEAMLESSSLY

//Example
//console.log('I am ' + 23 + 'years old');
// plus sign is utilised to the type CORCION TO OCCUR.
// I am is a string
// 23 is a number hence the conversion was done

//console.log('23 ' - '10' - 3);
// some other operators like - MINUS operator triggers the opposite compared plus operators

//console.log('23' * '2');

// Another example
//console.log('23' / '2');

//Truthy and Falsy Values 5 types

// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
//All values are truthy unless they are defined as falsy.That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// 0
// ''
// Undefined
// null
// NaN

//console.log(Boolean(0));
//console.log(Boolean(undefined));
//console.log(Boolean('Jonas')); // String without any object = Truthy value
//console.log(Boolean({})); // Empty object = Truthy value
//console.log(Boolean('')); // Empty string conversion = false

//Example ONE

//const money = 0; //without money
//if (money) {
//console.log("Don't spend it all ;)");
//} else {
// console.log('You should get a job');
//}

//Example TWO
//const money = 100; //with money
//if (money) {
//console.log("Don't spend it all ;)");
//} else {
//console.log('You should get a job');
//}

//Example THREE
//const height = 100; // with falsy value
//if (height) {
//console.log("Don't spend it all, buy some milk ;)");
//} else {
//console.log('You should start a new job');
//}

// Equality Operators - returns a true or false value depending on the condition set.

//const age = 18; // single equal = assignment operator
//if (age === 18) // tripple === comparison operator
//console.log('You are an adult');
// By default always use tripple === comparison operator.

//const age = 18;
//if (age == 18)
//console.log('You are an adult');

// Prompt function = This is used to obtain information from a user.

//const favourite = Number(prompt("What is your name"));
//console.log(favourite);
//console.log(typeof favourite);

//if (favourite == 23) { // This is loosed equality operator/ will type coretion
//console.log('Cool! 23 is an amazing number')
//}

// 23 === 23 - It will work
// 23 == 22 - It will work - bc loosed operator

/* if (favourite === 23) { // This is strict equality operator/ this will not do type coretion
    console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}
if (favourite !== 23) console.log('Why not 23?');
*/

// Boolean Logic and Logical Operators

// Example A - true and false
// console.log('Someone else should drive')

/*
const hasDriversLicence = true; //A
const hasGoodVision = false; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision) {
    console.log('Sarah is able to Drive');
} else {
    console.log('Someone else should drive');
}
*/

// Example B - true and true
// console.log('Sarah is able to Drive');

/*
const hasDriversLicence = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
    // console.log('Sarah is able to Drive');
// } else {
    //console.log('Someone else should drive');
//}

const isTired = false; // c
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision) {
    console.log('Sarah is able to Drive');
} else {
    console.log('Someone else should drive');
}
*/

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times.The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well(draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else -if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points.Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
const scoreDolphine = (96 + 108 + 89) / 3; 
const scoreKoalas = (88 + 100 + 110) / 3; // change the koalas no to 100 and see thanges in the code
console.log(scoreDolphine, scoreKoalas);

if (scoreDolphine > scoreKoalas) {
    console.log('Dolphine win the trophy!!!!');
} else if (scoreKoalas > scoreDolphine) {
    console.log('Koalas win the trophy!!!');
} else if (scoreDolphine === scoreKoalas) {
    console.log('Both with the trophy');
}
*/

/*Bonus 1

const scoreDolphine = (97 + 112 + 101) / 3; 
const scoreKoalas = (109 + 95 + 123) / 3; // change the koalas no to 100 and see thanges in the code
console.log(scoreDolphine, scoreKoalas);

if (scoreDolphine > scoreKoalas) {
    console.log('Dolphine win the trophy!!!!');
} else if (scoreKoalas > scoreDolphine) {
    console.log('Koalas win the trophy!!!');
} else if (scoreDolphine === scoreKoalas) {
    console.log('Both with the trophy');
}
*/

/* The JavaScript Switch Statement
Use the switch statement to select one of many code blocks to be executed.

Syntax

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

/*
const day = 'Tuesday'; // Change the variable to see output

switch (day) { // Design for equality day === 'monday' Not for comparison
    case 'monday':
    console.log('Plan the couse structure');
    console.log('Go to stand-up meeting');
        break;
    case 'Tuesday':
    console.log('Prepare food and shopping');
        break;
    case 'Wednesday':
    console.log('Write code examples');
        break;
    case 'Thursday':
    console.log('Do school runs');
        break;
    case 'Friday':
    console.log('Check to see the pipeline is running');
        break;
    case 'Sataurday':
    console.log('Help out with anu BAU tasks');
    break;
}
*/

// Statements and Expressions - A code that produce any value

//In computer programming a statement can be thought of as the smallest standalone element of an imperative programming language.

// A program is formed by a sequence of one or more statements.

// A statement will have internal components(e.g., expressions).

// JS expects statements and expression in different places.

// console.log(`I'm ${2037 -1991} years old ${me}`)

/*
Ternary Operator
The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>

Here is an example using if / else:

*/

// Example one - Ternary Operator syntax short method.

// const age = 120;

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// Example two - Ternary Operator syntax longer method.

//const age = 15;

//let drink2;
//if (age >= 18) {
//drink2 = 'wine';
//} else {
//drink2 = 'water';
//}
//console.log(drink2);

/*
The "use strict" Directive
The "use strict" directive was new in ECMAScript version 5.

Forbids things that are not required in your code.
Helps to create visible errors


It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

All modern browsers support "use strict" except Internet Explorer 9 and lower:

*/

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// This a process that helps in re using codes.
// Function can recieve data and return data
// DRY = DONT REPEAT YOURSELF

// Function Declaration
// Functions in JavaScript allow us to carry out some set of actions, important decisions, or calculations and even makes our website more interactive.

// function logger() {
//console.log('my name is Jonas');
//}
//logger();
//logger();
//logger();

// This called invoking a functions
// This called calling a functions
// This called running a functions

/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);
*/

/*
Function declaration 
- A function declaration also known as a function statement declares a function with a function keyword. The function declaration must have a function name.
- Function declaration does not require a variable assignment as they are standalone constructs and they cannot be nested inside a functional block.
- These are executed before any other code.
- The function in function declaration can be accessed before and after the function definition
*/
// Function declaration example

//function calcAge1(birthYear) {
//return 2037 - birthYear;
//}
//const age1 = calcAge1(1991);

/*
Function expresssion
-A function Expression is similar to a function declaration without the function name.
-Function expressions can be stored in a variable assignment.
-Function expressions load and execute only when the program interpreter reaches the line of code.
-The function in function expression can be accessed only after the function definition.
*/
// Function expression example

//const calcAge2 = function (birthYear) {
//return 2037 - birthYear;
//}
//const age2 = calcAge2(1991);
//console.log(age1, age2);

// Function expression is the prefered FUNCTION METHOD to be used.
// It hels to define all the function on the code and the call them.
// Helps to store variable and values
// Both Function expression and declaration have a place in JS

//JavaScript Arrow Function
//Arrow functions were introduced in ES6.
//Arrow functions allow us to write shorter function syntax:#

// Example

/*
let myFunction = (a, b) => a * b;

Before Arrow:
hello = function() {
  return "Hello World!";
}


With Arrow Function:
hello = () => {
  return "Hello World!";
}
*/

// Comaprison of Arrow function  with Function Expression

// function expression

//const calcAge3 = function (birthyear) {
//return 2037 - birthyear;
//}

// Arrow function
// Easy and faster to write
// No curly bracess needed
// Return happens implicitly - no return keyword written
// No paraenteses needed to be written

// Example one - birthyear
//const calcAge4 = birthYear => 2037 - birthYear;
//const age4 = calcAge4(1991); // Save return value to a variable
//console.log(age4);

//Example two - Years until retirement
// Return function is used because of the lines of code trying to calculate retirement age.
// Multiple lines of codes are needed when you cal many things

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));

//Example three - When you have muliple paramenters
// Utilise paratheses to wrap multiple parameters

// const yearsUntilRetirement = (birthYear, firstName) => {
//const age = 2037 - birthYear;
//const retirement = 65 - age;
//return `${firstName} retires in ${retirement} years`;
//console.log(yearsUntilRetirement(1991, 'Jonas'));
//console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions

//onst cutPieces = function (fruit) {
// return fruit * 4; // You can change the fruit values of the functions
//};

//const fruitProcessor = function (apples, oranges) {

//const applePieces = cutPieces(apples); //  fruitProcessor calling cutPieces x 1
//const orangePieces = cutPieces(oranges); // fruitProcessor calling cutPieces x 1

//const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//return juice;

//};

//  Reviewing Functions

//function calcAge(birthYear, firstName) {
//const age = 2037 - birthYear;
//console.log(`${firstName} retires in ${retirement} years old`);
//return age;
//const age = calcAge(1991, 'Jonas')

// Descriptions of the code

// Function name = calcAge

// (birthYear, firstName) = Parameters: placeholders to receive input values Like local variables of a function.

// Function body = Block of code that we want to reuse . Processes the function's input data
// const age = 2037 - birthYear;
// console.log(`${firstName} retires in ${retirement} years old`);

// return age; = return statement to output a value from the function and terminate execution

// const age = calcAge(1991, 'Jonas') = Calling or invoking or running a function uses (parentheses)

// 1991, 'Jonas' = Arguments actual values of the function parameter to input data.

// const age = Variable to save returned value (function output)

// console.log in the function body = It is use to print out values for the developer output, it has nothing to do with RETURN VALUE

// What is the DOM?
// DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.

// The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

// Let's take a look at this HTML code to better understand the DOM tree structure.

// <!DOCTYPE html>

// https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/

// HTML DOM querySelector() Method
// Example
// Change the text of the first child element with class="example" in a <div> element:

// var x = document.getElementById("myDIV");
// x.querySelector(".example").innerHTML = "Hello World!";

// Definition and Usage
// The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element.

// Note: The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.

// JavaScript Arrays
// An array is a special variable, which can hold more than one value:

// const cars = ["Saab", "Volvo", "BMW"];
// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

// const array_name = [item1, item2, ...];

// Two most data structures are below:
// 1. Arrays
// 2. Objects

// const friends = ["Micheal", "John", "Peter"];
// console.log(friends);

// Arrays can hold as many values as you want
// Arrays can also hold many values of any types
// Arrays can be strings and also numbers
// You create arrays using Array function and paratheses.
// Arrays can use keyword = new.
// Arrays are zero base = index sliciing

// const y = new Array(1991, 1984, 2008, 2008, 2020);

// // This is the ways to call Arrays
// console.log(friends[0]);
// console.log(friends[2]);

// This is a way to get a number of element in the array.
// Lenght is the amount of peoperties inside an array - not zero based
// console.log(friends.length); // this will give 3 as a  number

// To get index of the last element in the array
// console.log(friends[friends.length - 1]);
// [friends.length - 1] is an expression
// Expression is something that produces values.
// Statement cannot be used to replace an expression

// friends[2] = "Jay";
// console.log(friends);
// This is another method used to add something to an array.
// Array is not a primitive values
// You can mutate arrays even though it was declared with "const"
// friends = ['Bob', 'Alice']; - This is a wrong way.

// const firstName = "Jonas";

// const jonas = ["firstname", "Paul", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// // Tasks
// const calcAge = function (birthYear) {
//   return 2037 - birthYear; // This is arry
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// JavaScript Array Methods and Properties

// const friends = ["Micheal", "John", "Peter"];
// const newLength = friends.push("Jay"); // This is a method used to add ELEMENT to an ARRAY.
// Push is a function and it can return something
// You can pass arguments into functions
// Push function is used to retune a value
// To capture the new value, you can create a new VARIABLE for it
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// Remove Element
// friends.pop("Jay");
// console.log(friends);

// console.log(friends.indexOf("Stephen")); // This is not on the Array list -1
// console.log(friends.indexOf("John"));

// friends.push(23);
// console.log(friends.includes("Stephen")); // This method uses equality
// console.log(friends.includes("Peter")); // This method uses equality
// console.log(friends.includes("23")); // This method uses equality

// ARRAY Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below

// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44

// const calcTip = function (bill) {
//     return bill >= && bill <= bill * 0.15: bill * 0.2;
// }

// const calcTip = bill => bill => 50 && bill <= 300 ? bill * 0.15: bill *0.2:

// Introduction to Objects
// Objects are variables too. But objects can contain many values.
// const car = {type:"Fiat", model:"500", color:"white"};
// The values are written as name:value pairs (name and value separated by a colon)

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Shmit",
//   age: 2037 - 1991,
//   job: "Teacher",
//   friends: ["Mike", "Peter", "Russell"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// This is a way to pull data from an object
// Dot. is the operator to goes to the object and retrieve the property

//console.log(jonas["lastName"]);
// This is a way to pull data from an object
// Bracket is used as the operator to goes to the object and retrieve the property
// Operations is an expression

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);
// This is a way to pull data from an object
// Square bracket is utilised in this case
// Bracket notation is used to carry out action on first and last name expression
// Any other typre of expression can used DOT notation

// Dot notation vs Bracket notation in JavaScript
// The dot notation and bracket notation both are used to access the object properties in JavaScript.
// The dot notation is used mostly as it is easier to read and comprehend and also less verbose.
// The main difference between dot notation and bracket notation is that the bracket notation allows us to access object properties using variable.

// // Propmt method
// A prompt box is used if you want the user to input a value.
// When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.
// Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.

// const interestedIn = prompt(
//   "What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(jonas[interestedIn]);

// How to deal with Undefined properties
// Undefined is a falsey values
// Below is a custom string example when a USER tries to access a property that does not exists

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// Adding new properties to an object.
// Example

// jonas.loaction = "Portugal";
// jonas["twitter"] = "@jonas";
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// Task is to DYNAMICALLY get Jonas, 3 friends and Micheal
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`
// );
