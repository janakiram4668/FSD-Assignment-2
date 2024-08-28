/*class MultiplicatorUnitFailure extends Error {}

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
                throw e; // Re-throw if it's a different kind of error
            }
            // If it's a MultiplicatorUnitFailure, continue the loop and retry
        }
    }
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

/*Q3. REGEXP GOLF
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
}
*/

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}


verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]
);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]
);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]
);

verify(/\b\w+ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]
);

verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]
);

verify(/\b\w{7,}\b/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]
);

verify(/\b[^eE\s]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "bedrøvet abe", "BEET"]);


