﻿// Variables
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
////////
// For loops 
////////

// useful for iteerating values of an array!
(function () {
    'use strict';
    
    let anArray = ['one', 'two', 'three', 'four', 'five'];

    for (let x = 0, y = anArray.length; x > y; x +=1) { //so x=0 y equals the array's count, then whilst x is less than y, increment by one
        console.log(anArray[x]); // logs each value of x
    }
})();
////////
// For in loops 
////////
(function () {
    'use strict';
    
    let obj = {
          key1: 'value1',
          key2: 'value2',
          key3: 'value3'  
    };

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) { // this checks if the property iterating actually belongs to the object
            console.log('key is:', prop, 'value is:', obj[prop]);
        }
    }
})();

////////
// For of loops 
////////
(function () {
    'use strict';
    
    let arr =[1,2,3];

    for (let val of arr) {
        console.log('the value is:', val);
    }

    let mySet = new Set();
    mySet.add('x').add('y').add('z');

    for(let val of mySet) {
        console.log(val); //xyz
    }

    let myMap = new Map();
    myMap.set('key1', 'a').set('key2', 'b').set('key3', 'c');

    for (let val of myMap) {
        if(val[1] === 'b') {
            break;
        }
        console.log(val[1]); //abc
    }


})();

////////
// Iterators 
////////
(function () {
    'use strict';

    let mySet2 = new Set(['a','b','c']);
    let SetItems = mySet2.entries();
    console.log (SetItems.next());
    console.log(SetItems.next()); 
    console.log(SetItems.next()); 
    console.log(SetItems.next()); //true

})();

////////
// While 
////////
(function () {
    'use strict';

    let limit = 0;
    while (limit < 5) {
        if (limit === 3 ) {
            break;
        }
        console.log(limit  += 1);

    }

    let condition = true;
    do {
        console.log ("executed once");
        condition = false;
    } while(condition); // will only execute once as we changed the let variable

})();
////////
// Working with strings 
////////
(function () {
    'use strict';

    let testString = 'this is a test string';
    console.log(testString.length); //21

    let strArr = testString.split(' '); //Split converts a string into an array using space as the spilt character.
    console.log(strArr); //(5) ["this", "is", "a", "test", "string"]

    console.log(testString.indexOf('is')); //2 (remember starts on 0) the is is inside this
    console.log(testString.lastIndexOf('is')); //5 (remember starts on 0) this is is the last occurance of is so the word is.
    console.log(testString.toUpperCase()); 
    console.log(testString.toLowerCase());

    console.log(testString.substring(8)); //=a test string
    console.log(testString.substring(8,9)); //=a

    console.log(testString.slice(8)); //=a test string
    console.log(testString.slice(8,9)); //=a //difference between substringa nd slice is slick can accept negative numbers.
    console.log(testString.slice(-6)); //=string (works backgrounds)
    console.log('  test     '.trim()); //=string (works backgrounds)

})();
////////
// Template Literals 
////////
(function () {
    'use strict';

    let template1 = `this is a template literal`;
    let template2 = `this is a 
    template1 literal`; //respects the returns, basically all stuff space, new lines is respected.
    let a = 'S',
        b = 'something';
    console.log (`a is ${a}, which ${b} else, and the ${reverse('thing')} is reversed'`); //dont have to escape the variables and functions!

    function reverse(string) {
        return string.split('').reverse().join('') //breaks into array, reverses it and joins back into string, boom!;
    }

    function buildStr(strings, ...values) {
        return strings[3] + values[2] + strings[2] + values[1] + strings[1] + values[0] + strings[0];;
    }
    console.log(buildStr`a is ${a}, while b is ${b} else, and ${reverse(b)} is reversed`); // idont know whats going on here
})();
////////
// Numbers 
////////
(function () {
    'use strict';

    console.log(Number.isNaN(5 * "opps!")); //true as cant be done.

    let floatstring = '1.5 twat';
    let intString = '3 hey';
    console.log(typeof floatstring); //string
    console.log(typeof intString); //string
    console.log(typeof Number.parseFloat(floatstring)); //number, also both remove any letters if needed, numbers need to at start though
    console.log(typeof Number.parseInt(intString)); //number

    let num = 5.67889;
    console.log(num.toFixed(2)); //number of decimals
    console.log(num.toExponential());
    console.log(num.toLocaleString());
    console.log(num.toPrecision(2)); //number of digits
    console.log(typeof num.toString()); //converts to a string
})();
////////
// Arrays 
////////
(function () {
    'use strict';

    let array = ['one', 'two', 'three'];
    console.log(array.length); //3
    array.push('four'); //added an extra item to the end of the array
    array.unshift('zero'); //added zero to the start of the array
    console.log(array); //(5) ["zero", "one", "two", "three", "four"]
    array.pop(); //removes the last item of the array
    array.shift(); //removes item from start of the array
    console.log(array); //(3) ["one", "two", "three"]
    array.splice(0); //removes everythign from array
    console.log(array); //[]

    array = ['one', 'two', 'three'];
    array.splice(0, 2); //removes 2 items array. STarts from beginning
    console.log(array); //["three"]

    array = ['one', 'two', 'three'];
    array.splice(0, 3, 'a', 'b', 'c'); //removes 3 items array. Then adds 3 new items to array
    console.log(array); //(3) ["a", "b", "c"]
    array.reverse(); //reverses item order array
    console.log(array); //(3) ["c", "b", "a"]
    array.sort(); //sorts array in alphabetical order but puts caps to front!
    console.log(array); //(3) ["a", "b", "c"]
    array.splice(0, 3, 'a', 'b', 'C');
    array.sort(); //capital c will go to front
    console.log(array); //(3) ["C", "a", "b"]

    console.log([3, 10000, 20].sort()); //(3) [10000, 20, 3]
    //order is not ideal the 10000 goes first followed by 20 as it sorts by first digit
    console.log([3, 10000, 20].sort(function (a,b) { //comparator function??
        return a - b;
    })); //
    console.log(['b', 'C', 'a', 'D'].sort(function (a,b) { //comparator function??
        let LowerCaseA = a.toLowerCase(),
            LowerCaseB = b.toLowerCase();
        if (LowerCaseA < LowerCaseB) {
            return -1;
        } else if (LowerCaseA == LowerCaseB) {
            return 0;
        } else {
            return 1;
        }
    })); // kind of understand this one better, bascially attaches a value to each to determine order, not sure what happens when two -1 etc 

    console.log(array.join('')); //Cab
    // Join converts an array into a string
    console.log(array.join('-')); //C-a-b
    //argument is the character inbetween each arrays item
    console.log(array.indexOf('b')); //2
    console.log(array.indexOf('g')); //-1 means none
    console.log(array.slice(1)); //(2) ["a", "b"]
    //Slice slices an array at a point
    console.log(array.slice(1, 2)); //["a"]
    //slices second argument stops the slice at a point

})();
////////
// Strings 
////////
(function () {
    'use strict';
    
    let array = ['x', 'y', 'z'];

    array.forEach(function(currentItem) {//goes through everything
        console.log(currentItem);
    });
    array.some(function(currentItem) {//some stops when it returns true
        console.log('iterating...');
        return currentItem === 'y'; //only console logs twice as it stops when some record is true
    });
    array.every(function(currentItem) { //every stops when it returns false 
        console.log('also iterating...');
        return currentItem !== 'x'; //only returns one as the first item is X so this equals false.
    });
    array.every(function(currentItem) { //every stops when it returns false 
        console.log('also iterating...');
        return currentItem !== 'x'; //only returns one as the first item is X so this equals false.
    });
     
    let arr = [1,2,3,4,5];
    let sum = arr.reduce(function(previous, current) {
        return previous + current;
    }, 0); // adds all the array items together
    console.log(arr);

    let refs = {
        a: 'alpha',
        b: 'beta',
        g: 'gamma'
    };

    let arr2 = ['a', 'b', 'b'];
    //map array takes value of orginal array and transform them into a new array.
    let result = arr2.map(function (currentItem) {
        return refs[currentItem];
    });
    console.log(result);
})();
