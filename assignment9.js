//Q1. Explain the .map() function in JavaScript and provide three examples with detailed explanations.
/*The .map() function is used to create a new array by applying a function to each element of an existing array. It doesn’t change the original array.
*/
// example 1
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);
//Each number in the numbers array is doubled, and a new array [2, 4, 6] is created.

// example 2
let fruits = ['apple', 'banana', 'cherry'];
let excitedFruits = fruits.map(function(fruit) {
  return fruit + '!';
});

console.log(excitedFruits);
//Adds an exclamation mark to each fruit name, resulting in a new array with the updated strings.


// example 3
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ];
  let names = people.map(function(person) {
    return person.name;
  });
  
  console.log(names);

// Extracts the name property from each object in the people array, creating a new array with just the names.

//Q2. Explain the .reduce() function in JavaScript and provide three examples with detailed explanations.

/*The .reduce() function is used to reduce an array to a single value by applying a function to each element of the array, accumulating the result.
*/

//example 1
let number = [1, 2, 3, 4];
let sum = number.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

/*The callback function adds each number to an accumulator.
The initialValue is 0, so the sum starts from 0.
The result is 10, which is the sum of all numbers in the array.
*/

// example 2

let num = [1, 2, 3, 4];
let product = num.reduce(function(accumulator, currentValue) {
  return accumulator * currentValue;
}, 1);

console.log(product);

/*The callback function multiplies each number with the accumulator.
The initialValue is 1, so the product starts from 1.
The result is 24, which is the product of all numbers in the array.
*/

// example 3
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce(function(accumulator, currentArray) {
  return accumulator.concat(currentArray);
}, []);

console.log(flattened);
/*The callback function uses concat to merge each sub-array into the accumulator.
The initialValue is an empty array [].
The result is a single array [1, 2, 3, 4, 5, 6] that contains all elements from the nested arrays.
*/

//Q3. Explain the .filter() function in JavaScript and provide three examples with detailed explanations.

/*The .filter() function is used to create a new array with all elements that pass a test implemented by a provided function. 
It does not modify the original array and only includes elements that satisfy the condition specified in the callback function.
*/

// example 1

let n = [1, 2, 3, 4, 5, 6];
let evenNumbers = n.filter(function(n1) {
  return n1 % 2 === 0;
});

console.log(evenNumbers);
/*The callback function checks if each number is even (i.e., num % 2 === 0).
Only numbers that pass this test (2, 4, 6) are included in the new array.
*/

// example 2

let words = ['apple', 'banana', 'kiwi', 'strawberry'];
let longWords = words.filter(function(word) {
  return word.length > 5;
});

console.log(longWords);

/*The callback function checks if the length of each word is greater than 5.
Only words that meet this condition ('banana' and 'strawberry') are included in the new array.
*/


// example 3

let p = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  let adults = p.filter(function(person) {
    return person.age >= 30;
  });
  
  console.log(adults);
  
  /*The callback function checks if the age property of each person is 30 or older.
Only objects that meet this condition (Bob and Charlie) are included in the new array.
  */
  











