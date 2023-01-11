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

/* Basic Operators
Types of JavaScript Operators
There are different types of JavaScript operators:
https://www.w3schools.com/js/js_operators.asp

Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Conditional Operators
Type Operators

An operator is a sign or symbol that specifies the type of calculation to perform within an expression. 
There are mathematical, comparison, logical, and reference operators.
Access supports a variety of operators, including arithmetic operators such as +, -, multiply(*), and divide(/).
In addition to comparison operators for comparing values, text operators for concatenating text,
and logical operators for determining true or false values.*/

// Artemetics - subtraction

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018
console.log(ageJonas, ageSarah);

// You can  diff values at thesame time console log
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3); 



















