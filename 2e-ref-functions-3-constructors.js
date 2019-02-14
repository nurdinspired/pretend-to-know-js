//*********** Constructor function
//NEW keyword is critical
function Car(_color, _make) {
  this.color = _color;
  this.make = _make;
}

let c1 = new Car('red', 'Honda');
var c2 = Car('black', 'Toyota'); //modified the global scope, 'use strict'; to prevent error

console.log(c1);
console.log(c2);
//console.log(window.color, window.make);
console.log(global.color, global.make);

//BUILT IN Constructors
//https://www.w3schools.com/js/js_object_constructors.asp
//DON'T Create New Complex Objects
var x1 = new Object(); // A new Object object
var x2 = new String(); // A new String object
var x3 = new Number(); // A new Number object
var x4 = new Boolean(); // A new Boolean object
var x5 = new Array(); // A new Array object
var x6 = new RegExp(); // A new RegExp object
var x7 = new Function(); // A new Function object
var x8 = new Date(); // A new Date object, this one's ok

//DO Create, using literals & fn expressions
var x1 = {}; // new object
var x2 = ''; // new primitive string
var x3 = 0; // new primitive number
var x4 = false; // new primitive boolean
var x5 = []; // new array object
var x6 = /()/; // new regexp object
var x7 = function() {}; // new function object
