'use strict';

// Variables
////////////////////////////////
var foo = 42;
foo = 43;

let bar = 42; //for block scope we need to use let
const baz = 42; // cant redclare const variables

// Data types
////////////////////////////////

let number = 1;
let oct = 0o77; //63
let hx = 0x0011; //17
let bin = 0b1100; //12

let str = 'hello';
let quotes = '"Hello", said the man';
let escaped = '"oh no you didn\'t" she said';
let joined = 'Wait ' + 'what?';
let multiline = `this
string
has
linebreaks`; //to get linebreaks use back tick mark character `

let yes = true;
let mySymbol = Symbol('my symbol'); //symbols are always unique
let array = [5, 'something', true];
let array2 = new Array(5, 'something', true);

array[0]; // 5

var obj = {
    num: 5,
    str:'woohoo'
};

obj.num; //5
obj['str']; // woohoo

///Operators
////////////////////////////////

let addition = 1+1;
let substraction = 1-1;
let multiplication = 2*2;
let division = 5 / 2.5;
let remainder = 5 % 2; //1 as there is 1 remainder outputted (the 5 in 2.5)
//useful to determine if a numbers is even or odd as even will always return 0 as no remainders
let prefix = 5;
let postfix = 5;
// console.log(postfix++); //5
// console.log(postfix); //updated to 6
// console.log(++prefix); // updated to 6
// console.log(prefix); //Still 6

let additionAssignment = 1;
additionAssignment += 2; //3

let subtractionAssignment = 10;
subtractionAssignment -= 5; //5

// can also do *= /= and %=

1 == true; //true
1 === true; //false as a strict equals
1 != true; // false
1 !== true;
1 > 2; //false
1 >= 2; //false
1 < 2; //true
1 <= 2; //true
let x = 5 ** 2; // mutliples first (5) by itself by the second amount (2) 5x2
let y = 5 ** 3;
console.log(x); // 25
console.log(y); // 125

////////

let test = {
    g: 'x'
};
delete test.g; //undefined as deleted
console.log(test.g);

let word ='hello';
console.log(typeof word);

let arr =[]
console.log(typeof arr);
