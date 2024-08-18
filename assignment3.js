// History of JavaScript:
// JavaScript is developed by Brendan Eich, a computer scientist and programmer at Netscape Communications Corporation. 
// The initial name of the JavaScript was the 'Mocha'.
//  After that, it changed to 'LiveScript', and then 'JavaScript'.

// Between 1996 and 1997, the European Computer Manufacturers Association (ECMA) standardized JavaScript.
//  After that, 3 revisions of the JavaScript have been done.

// In ES5 (2009), Node.js was introduced to use JavaScript as a server-side language. 
// The ES6 (2015) was a significant revision of JavaScript, introducing advanced features into JavaScript.

// Currently, JavaScript has reached the version ES14. 
// ES14 (ECMAScript 2023) the 14th version, was released in June 2023.

console.log(".........................................................")
// Data Types:

// Data types are like labels that tell a computer what kind of information it is dealing with. 
// Depending on the label, the computer knows how to handle and work with the information.

// Numbers:
console.log("Numbers:")
let a=5_62_562
let b=10550265856230324521n
let c=1.5620e5
console.log(a)
console.log(b+3n)
console.log(c)

// Strings:
console.log("Strings:")
let welcomeMessage = "Welcome to our website!"
let fullName = "janaki \"ram\""
let product = "book"
let price = 12.99
let message = `The price of the ${product} is $${price}`

console.log(welcomeMessage)
console.log(fullName)
console.log(message)

// boolean:
console.log("boolean:")
let age=25
console.log(age>18)

let iscitize=true
console.log(age && iscitize)

let isMember = false
let purchaseAmount = 120
let minimumAmountForNonMembers = 100
let discountEligibility = isMember || purchaseAmount >= minimumAmountForNonMembers
console.log(`Is the user eligible for a discount? ${discountEligibility}`)


console.log(".........................................................")

// Type Conversion:
// Type conversion, also known as type casting, is the process of converting a value from one data type to another. 
// This can be done explicitly by the programmer or automatically by the language (implicit conversion).

// Type Coercion:
// Type coercion is a feature of JavaScript where the language automatically converts one data type to another when performing operations. 
// This usually happens implicitly, based on the context in which the value is used.

// Type conversion

console.log("Type conversion:")
let str = "123"
let num = Number(str)
console.log(num)
console.log(typeof num)


let num1 = 456;
let str1 = String(num1)
console.log(str1)
console.log(typeof str1)
// Type coercion

console.log("Type coercion")
let num2 = 10
let str2 = "The number is " + num2
console.log(str2)
console.log(typeof str2)

let str4 = "5"
let num4 = 3
let result = str4 - num4
console.log(result)
console.log(typeof result)

let bool = true
let num5 = 10
let str5 = "The result is: "

let result1 = str5 + (num5 * +bool)
console.log(result1)
console.log(typeof result1)


console.log(".........................................................")

// Arithmetic Operators:

// Arithmetic operators are symbols used to perform basic mathematical operations,
//  such as addition, subtraction, multiplication, division, and more on numeric values.

console.log("Arithmetic operator:")
console.log(5+3)
console.log("5"+3)
console.log("5"-3)
console.log(5*3)
console.log("5"+3)
console.log(565/3)
console.log("56"/3)


console.log(".........................................................")

// Relational Operators:
// Relational operators are symbols used to compare two values or expressions. 
// They return a Boolean value (true or false) based on the result of the comparison.

console.group("Relational operators:")
console.log(5==58)
console.log(5>6)
console.log(5 != 6)


console.log(".........................................................")

// Logical Operators:
// Logical operators are used to perform logical operations on Boolean values. 
// They combine or invert Boolean values to determine the result of complex conditions.

console.log("Logical operator:")
console.log(5 > 0 && 8 < 20)
console.log(5 > 0 || 8 < 20)
console.log(!(45 > 10))


console.log(".........................................................")

// Ternary operator
// The ternary operator in JavaScript is a concise way to perform conditional operations. 
// It evaluates a condition and returns one of two values based on the result of the condition. 


console.log("Ternary:")
console.log((15 > 5) ? "Greater than 5" : "5 or less")

let isMember1 = true;
console.log(isMember1 ? "20% off" : "No discount")


let y = 15
let r = (y < 10) ? "Less than 10" : (y < 20) ? "Between 10 and 20" : "20 or more"
console.log(r)


console.log(".........................................................")

// Tempalte literals.

// Template literals are a convenient way to create strings in JavaScript. 
// Unlike regular strings that use single or double quotes, template literals use backticks (``).
//  This format allows you to easily include variables and expressions inside your strings without the need for complicated syntax.

console.log("Template literals:")
let na = "Alice"
let greeting = `Hello, ${na}! Welcome to the JavaScript course.`
console.log(greeting)


let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`

console.log(poem)


let x = 5
let z = 3;
let sum = `The sum of ${x} and ${z} is ${x + z}.`
console.log(sum)






