
// Variables
////////////////////////////////
var foo = 42;
foo = 43;

let bar = 42; //for block scope we need to use let
const baz = 42; // cant redeclare const variables

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
let ExponentiationOperatorX  = 5 ** 2; // mutliples first (5) by itself by the second amount (2) 5x2
let ExponentiationOperatorY = 5 ** 3;
console.log(ExponentiationOperatorX); // 25
console.log(ExponentiationOperatorY); // 125

////////

let test = {
    g: 'x'
};
delete test.g;
console.log(test.g); //undefined as deleted

let word ='hello';
console.log(typeof word); //string

let arr =[]
console.log(typeof arr); //object (should be an array so not that useful)

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!true); //false

let first = 'hello', second= 'world'; //comma operator only last value gets return for some reason. SO world is the returned value. Fuck knows the point of this yet!
// https://stackoverflow.com/questions/52550/what-does-the-comma-operator-do
let magic = {real: 'x', fake: 'y'} // this is a seperator and not a comma operator!


////////
// Operator precendence
////////

let precendence1 = 1 + 4 * 2; // 9, wierd
let precendence2 = (1 + 4) * 2; // 10, ( is highest precendence)
let precendence3 = 2 + 10 - 2; // 10
let precendence4 = 2 - 10 + 2; // -6 fuck it, makes no sense when compared to precendence1!!!!

console.log(precendence4); //false

////////
// Reserved Words
////////
let myThing1; //good
// let 1thing //bad as cant begin with number
// mySpecialVariable != myspecialvariable; //not the same as casing is important!
// var function = 'opps'; //reversed word bitches, notice the underlined scribble.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

////////
// Scrict mode
////////
 // most legends wrap thier javascript in a function to make sure everything is in strict mode.
 //strict mode shows errors for us

(function () {
    'use strict';
    //NaN = 'whatever!';//brings back error as using strict mode, if you remove strict mode it doesnt show the errors
    // put stuff in here


    ////////
    // Functions
    ////////
    function function1(msg, msg2) {
        console.log(msg);
    } // () parameters go in here. {} is where the expressions go in
    function1(); //runs the function we made
    function1('i\'m alive!'); //runs the function we made with the msg parameters
    function1('i\'m tired!'); //runs the same function with different string using the msg parameters

    function logArgs() {
        console.log(arguments); // not sure what arguments are yet
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
        return 'some value';
    } 
    logArgs('these', 'are', 'arguments'); //some value


    let f = function f() {}; //f is a function expression. The second f is an identifier that makes the function a named function rather than an anonomous function.
    f();

    function log() {
        console.log(testVariable); //declares undefined as function went through and declared variables first and then excuted the code. Only happens in var,so use let and const instead as they dont have this problem
        var testVariable = 'test'; //order of variable dont matter inside functions, BUT console log declared undefined. read above
    }
})();
////////
// Objects
////////
(function () {
    'use strict';

    let myObject = {
            property1: 'hello',
            property2: true
    }; // recommend way of writing objects
    
    let obj = new Object(); // not recomended to use

    myObject.property1; // 'hello'
    myObject['property1']; // 'hello'

    myObject.property3 = false; //creates a new value (mor common method)
    myObject['property4'] = 'something'; //create a new value

    function getThingsByColor(color) {
        let things = {
            red: 'a red thing',
            green: 'a green thing',
            blue: 'a blue thing',
        };

        return things[color] || 'Sorry, no thing of that color exists';
    }
    console.log(getThingsByColor('red')); // a red thing
    console.log(getThingsByColor('blue')); // a blue thing
    console.log(getThingsByColor('')); // Sorry, no thing of that color exists
    
})();

////////
// Sets
////////
(function () {
    'use strict';

    let myset = new Set();
    let anArray = [1,1,1,2,2,3];
    let mySet2 = new Set(anArray); //created a set and passed array to it

    console.log(mySet2); // 1,2,3. Just shows the unique values, so got rid of the duplicates
    console.log(mySet2.size); // 3 
    mySet2.add(4).add(5);
    mySet2.delete(1); //the value, not the index (as unique)
    mySet2.delete(6); //false as no 6
    console.log(mySet2); // 2 3 4 5
    console.log(mySet2.delete(6)); // false
    console.log(mySet2.has(3)); // true!!!
})();

////////
// Maps
////////
(function () {
    'use strict';

    let myMap = new Map();
    let myMap2 = new Map([['a','b'],[1,2]]); 
    myMap2.set('c',3); //add new key thats string value c and a value of 3
    console.log(myMap2.get('c')); //3
})();

////////
// Weak Maps and Weak Sets
////////
(function () {
    'use strict';

    let myWeakSet = new WeakSet();
    let someObj = {};
    myWeakSet.add(someObj);
    console.log(myWeakSet.has(someObj)); //true

    myWeakSet.delete(someObj);
    console.log(myWeakSet.has(someObj)); //false

    ///

    let myWeakMap = new WeakMap();


})();

////////
// If statements
////////
(function () {
    'use strict';

    if (1+1 === 2) {
        console.log('the condition is true');
    } 

    if (true === false) {
        console.log('wont be displayed');
    } else {
        console.log('will be displayed');
    }

    let color = 'blue';
    if (color === 'blue') {
        console.log('its is blue');
    } else if (color === 'green') {
        console.log('it is green');
    } else {
        console.log(color);
    }

    if (1) {
        console.log('truthy!');
    }

    let arr =['yes'];

    if (arr.length) {
        console.log('arrays has length');
    }
        // Ternary statement
        (true) ? console.log('log for truthy') : console.log('logo for falsey'); //conditional, truthy operand, falsey operand
        (5==4) ? console.log('log for truthy') : console.log('logo for falsey'); //log for falsey
        (5==5) ? console.log('log for truthy') : console.log('logo for falsey'); //log for truthy

})();
////////
// Switch statements
////////
(function () {
    'use strict';

    let switcher = 'two';
    switch (switcher) {
        case 'one':
            console.log('the value was one');
            break;
        case 'two':
            console.log('the value was two');
            break;
        case 'three':
            console.log('the value was three');
            break;
        default:
            console.log('nothing else matched');
     }

})();
