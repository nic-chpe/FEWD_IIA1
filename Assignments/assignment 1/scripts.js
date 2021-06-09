//Question 1 
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction
//Question 2.	Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
let scoreTotal = 100;
let lastName = 'Chavez';
let assignmentSubmission = true;
let finalGrade = null;
//Question 3. Give me two examples of complex / variable expressions.
//Question 4 declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
let firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou;
let sFirstName, sLastName, sAddress, sCity, sState, nZipCode, nYourAge, sReferralSource, bMayWeContactYou;
//Question 5. 5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
let mayWeContactYou;
mayWeContactYou = false;

let mayWeContactYou = false;
let mayWeContactYou = true;

let nZipCode; 
nZipCode = 92116;

let zipCode = 92116, city = 'San Diego'; 
// 6.	Create a variable. Add a number and a string and display the coerced result in the browser’s console window. 
let valueA = '4', valueB = 6;
let sum = valueA + valueB;
console.log(sum);
// Console displays 46 
// 7. Create two variables. For the first variable, add a Boolean and a string and display the coerced result. 
let city = true; 
let state = 'San Diego';
let welcome = city + state;
document.write(welcome);
//Document displays trueSan Diego
//For the second variable, add a number and a Boolean and display the coerced result. 
let age = 18;
let legal = false;
let welcome = age + legal;
console.log(welcome);
//Document displays 18
// 8. Is the string literal valid? yes!
// 9. a) Create a variable that produces a null value in the console window. 
var firstName;
var lastName = null;
console.log(lastName)
// b) Then, create a variable that produces an undefined value in the console window.
var firstName;
var lastName = null;
console.log(firstName)
//10.	Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
console.log(typeof 'answer');
console.log(typeof 8);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
//11 Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
let name = 'Nicole';
className = 'Javascript';
alert(`Hello ${name},` + ` welcome to the ${className}` + " class" );
/*12.	Declare a variable called name and set it equal to your name. 
Substitute your name in the previous alert string with the variable instead.*/
let name = 'Nicole';
alert(name);
/* 13.	Declare a variable called course and set it equal to “JavaScript”. 
Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.*/
let course = 'JavaScript';
alert(course);
/* 14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

Hello Zak Ruvalcaba.
Welcome to the JavaScript class!*/
let name = "Zak Ruvalcaba";
let course = "JavaScript";
alert(`Hello ${name}.` + "\n" + `Welcome to the ${course}` + " class!");
//15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 
let name = prompt("Enter your first name" );
document.write(name);
// 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
let name = prompt("Enter your first name" );
let course = prompt("Enter the course you are taking" );
document.write(`Hello ${name}.` + "\n" + `Welcome to the ${course}` + " class!");
/* 17.	Declare a variable called x and assign it a value of 10. 
Declare a variable called y and assign it a value of 20. 
Display the sum of those two numbers in the console window.*/
let x = 10, y = 20;
window.console.log(x + y); 
/* 18 Declare a variable called x and assign it a value of 20. 
Add and assign 20 to that variable and display the result in the console window.*/
let x = 20;
x += 20;
window.console.log(x)
/* 19.	Declare a variable called x and assign it a value of 20.
Multiply and assign 5 to that variable and display the result in the console window.*/
let x = 20;
x *= 5;
window.console.log(x)
/* 20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
Divide and assign 1 to that variable and display the result in the console window. */
let x = (20%3);
x /= 1;
window.console.log(x);
/* 21.	Using a set of Comparison and Logical operators, write an application that evaluates 
to true and displays the result within the console window. */
let x = 2;
let y = 20;
alert(x == 2 || y == 2 );
/* 22 Using a set of Comparison and Logical operators, write an application that evaluates to 
false and displays the result within the console window. The application cannot use the same operators used in the previous application. */
let x = 30;
let y = 5;
alert(x == 30 && y == 50);
/* The end */
