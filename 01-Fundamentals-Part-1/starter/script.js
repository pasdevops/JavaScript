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






























