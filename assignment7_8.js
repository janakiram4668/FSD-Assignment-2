/*Q1. THE SUM OF RANGE
Write a range function that takes two arguments, start and end, and returns an array containing all the
numbers from start up to and including end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the
example program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the
“step” value used when building the array. If no step is given, the elements should go up by increments of one,
corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this
also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
Sample Input and Outputs:
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/

function range(start, end, step = 1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        array.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        array.push(i);
      }
    }
  
    return array;
  }
  
  function sum(array) {
    let total = 0;
    for (let number of array) {
      total += number;
    }
    return total;
  }
  
  console.log(range(1, 10));
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));

/*Q2. REVERSING AN ARRAY
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For
this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an
array as its argument and produce a new array that has the same elements in the inverse order. The second,
reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by
reversing its elements. Neither may use the standard reverse method.
Sample Input and Outputs:
reverseArray Example:
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
reverseArrayInPlace Example:
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  
  function reverseArrayInPlace(array) {
    let left = 0;
    let right = array.length - 1;
    
    while (left < right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      
      left++;
      right--;
    }
  }
  
  
  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray));
  console.log(myArray);
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  
// 3Q A list

// Function to convert an array to a list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }

  function listToArray(list) {
    let array = [];
    for (let node = list; node !== null; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }

  function prepend(value, list) {
    return { value: value, rest: list };
  }
  
  function nth(list, position) {
    if (!list) {
      return undefined;
    } else if (position === 0) {
      return list.value;
    } else {
      return nth(list.rest, position - 1);
    }
  }
  
  
  console.log(arrayToList([10, 20]));
  console.log(listToArray(arrayToList([10, 20, 30])));
  console.log(prepend(10, prepend(20, null)));
  console.log(nth(arrayToList([10, 20, 30]), 1));
  

// Assignment 8

/*Q1. FLATTENING
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a
single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
Result: [1, 2, 3, 4, 5, 6]
*/
let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []);

console.log(flattenedArray);


/*Q2. YOUR OWN LOOP
Write a higher-order function loop that provides something like a for loop statement. It should take a
value, a test function, an update function, and a body function. Each iteration, it should first run the
test function on the current loop value and stop if that returns false. It should then call the body
function, giving it the current value, and finally call the update function to create a new value and
start over from the beginning.
When defining the function, you can use a regular loop to do the actual looping.
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
*/
function loop(value, test, update, body) {
    while (test(value)) {
      body(value);
      value = update(value);
    }
  }

  loop(3, n => n > 0, n => n - 1, console.log);

/*Q3. EVERYTHING
Arrays also have an every method analogous to the some method. This method returns true when
the given function returns true for every element in the array. In a way, some is a version of the ||
operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate function as parameters. Write two
versions, one using a loop and one using the some method.
// Skeleton code
function every(array, test) {
// Your Code...
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
*/
function every(array, test) {
    for (let element of array) {
      if (!test(element)) return false;
    }
    return true;
  }
  
  function everyWithSome(array, test) {
    return !array.some(element => !test(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10)); 
  console.log(every([2, 4, 16], n => n < 10)); 
  console.log(every([], n => n < 10)); 
  
  console.log(everyWithSome([1, 3, 5], n => n < 10)); 
  console.log(everyWithSome([2, 4, 16], n => n < 10)); 
  console.log(everyWithSome([], n => n < 10));