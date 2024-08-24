/*Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for
numbers divisible by 5 (and not 3), print "Buzz" instead.*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*When you have that working, modify your program to print "FizzBuzz" for numbers that
are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by
only one of those).*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after
it.
let abc = "abc";
console.log(abc.length);
// → 3*/

let triangle = "";

for (let i = 1; i <= 7; i++) {
    triangle += "#";
    console.log(triangle);
}
