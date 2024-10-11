/*class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
}

console.log(reliableMultiply(8, 8));
// → 64
*/
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure)) {
                throw e; 
            }
            
        }
    }
}

console.log(reliableMultiply(8, 8));

/*Q2. THE LOCKED BOX
Consider the following (rather contrived) object:
const box = new class {
locked = true;
#content = [];
unlock() { this.locked = false; }
lock() { this.locked = true; }
get content() {
if (this.locked) throw new Error("Locked!");
return this.#content;
}
};
It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the
function, and then ensures that the box is locked again before returning, regardless of whether the argument
function returned normally or threw an exception.
const box = new class {
locked = true;
#content = [];
unlock() { this.locked = false; }

lock() { this.locked = true; }
get content() {
if (this.locked) throw new Error("Locked!");
return this.#content;
}
};
function withBoxUnlocked(body) {
// Your code here.
}
withBoxUnlocked(() => {
box.content.push("gold piece");
});
try {
withBoxUnlocked(() => {
throw new Error("Pirates on the horizon! Abort!");
});
} catch (e) {
console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays
unlocked.
*/

const box = new class {
    locked = true;
    #content = [];
    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
};

function withBoxUnlocked(body) {
    let wasLocked = box.locked; 
    if (wasLocked) {
        box.unlock(); 
    }
    
    try {
        return body(); 
    } finally {
        if (wasLocked) {
            box.lock(); 
        }
    }
}

withBoxUnlocked(() => {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box.locked);


/* Q3. REGEXP GOLF
Code golf is a term used for the game of trying to express a particular program in as few characters as
possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a
given pattern and only that pattern.
For each of the following items, write a regular expression to test whether the given pattern occurs in a string.
The regular expression should match only strings containing the pattern. When your expression works, see
whether you can make it any smaller.
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
Refer to the table in the chapter summary for help. Test each solution with a few test strings.
// Fill in the regular expressions
verify(/.../,
["my car", "bad cats"],
["camper", "high art"]);
verify(/.../,
["pop culture", "mad props"],
["plop", "prrrop"]);
verify(/.../,
["ferret", "ferry", "ferrari"],
["ferrum", "transfer A"]);

verify(/.../,
["how delicious", "spacious room"],
["ruinous", "consciousness"]);
verify(/.../,
["bad punctuation ."],
["escape the period"]);
verify(/.../,
["Siebentausenddreihundertzweiundzwanzig"],
["no", "three small words"]);
verify(/.../,
["red platypus", "wobbling nest"],
["earth bed", "bedrøvet abe", "BEET"]);

function verify(regexp, yes, no) {
// Ignore unfinished exercises
if (regexp.source == "...") return;
for (let str of yes) if (!regexp.test(str)) {
console.log(`Failure to match '${str}'`);
}
for (let str of no) if (regexp.test(str)) {
console.log(`Unexpected match for '${str}'`);
}
} */

function verify(regexp, yes, no) {
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
  }
  
  // 1. car and cat
  verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]
  );
  
  // 2. pop and prop
  verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]
  );
  
  // 3. ferret, ferry, and ferrari
  verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]
  );
  
  // 4. Any word ending in ious
  verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]
  );
  
  // 5. A whitespace character followed by a period, comma, colon, or semicolon
  verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]
  );
  
  // 6. A word longer than six letters
  verify(/\b\w{7,}\b/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]
  );
  
  // 7. A word without the letter e (or E)
  verify(/\b[^eE\s]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "bedrøvet abe", "BEET"]
  );
  
/* Q4. NUMBERS AGAIN
Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign
in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in
front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the
number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.
// Fill in this regular expression.
let number = /^...$/;
// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
"1.3e2", "1E-4", "1e+12"]) {
if (!number.test(str)) {
console.log(`Failed to match '${str}'`);
}
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
".5.", "1f5", "."]) {
if (number.test(str)) {
console.log(`Incorrectly accepted '${str}'`);
}
}*/

let number = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}

for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
