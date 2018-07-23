'use strict';

var foo = 42;
foo = 43;

let bar = 42; //for block scope we need to use let

const baz = 42; // cant redclare const variables
baz = 43; // << this therefore wont work.


console.log('Working!!');
