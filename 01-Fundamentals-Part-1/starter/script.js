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

const favourite = Number(prompt("What is your name"));
console.log(favourite);
console.log(typeof favourite);


//if (favourite == 23) { // This is loosed equality operator/ will type coretion
    //console.log('Cool! 23 is an amazing number')
//}

// 23 === 23 - It will work
// 23 == 22 - It will work - bc loosed operator

/*if (favourite === 23) { // This is strict equality operator/ this will not do type coretion
    console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}


if (favourite !== 23) console.log('Why not 23?');
/*
    






































