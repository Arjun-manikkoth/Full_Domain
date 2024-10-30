// let myJSON = '{"name":"John", "age":30, "car":null}';
// const newObj = JSON.parse(myJSON);//to plain object
// console.log(newObj);
// console.log(JSON.stringify(newObj));//to json
// console.log(newObj);

//------------------------------------------------------

//iife

// (function () {
//   console.log("immediately ivoked");
// })();

//application : Callbacks,event handler functions,map ,filter ,reduce

//------------------------------------------------------

// const fruits = [
//   { name: "apple", color: "green" },
//   { name: "banana", color: "yellow" },
//   { name: "grape", color: "green" },
//   { name: "orange", color: "orange" },
//   { name: "pear", color: "green" },
//   { name: "blueberry", color: "blue" },
// ];
// //Find the total number of green fruits ?

// const count = fruits.reduce((acc, curr) => {
//   if (curr.color === "green") return acc + 1;
//   else {
//     return acc;
//   }
// }, 0);

// console.log(count);

//print the common characteres in the two strings

//---------------------------------------------------------------------------------------------------------------------
// const students = [
//   { id: 1, name: "Alice", score: 85, class: "A" },
//   { id: 2, name: "Bob", score: 92, class: "B" },
//   { id: 3, name: "Charlie", score: 78, class: "A" },
//   { id: 4, name: "David", score: 95, class: "C" },
//   { id: 5, name: "Eva", score: 89, class: "A" },
//   { id: 6, name: "Freddy", score: 90, class: "C" },
// ];
// //find the student with largest score, print its name only

// let topper = students.reduce((highest, student) => {
//   if (highest.score < student.score) return student;
//   else return highest;
// });

// console.log(topper);

//---------------------------------------------------------------------------------------

//multiplication table of 5 using recursion

// function multiTable(num, limit) {
//   if (limit < 1) return;
//   multiTable(num, limit - 1);
//   console.log(num + "*" + limit + "=" + num * limit);
// }

// multiTable(5, 10);

//---------------------------------------------------------------------------------------

// let obj1 = { key: 1 };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = 2;
// obj2 = { key: 3 };

// console.log(obj1.key, obj2.key, obj3.key);

//output of this 2,3,2

//---------------------------------------------------------------------------------------

// const obj = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };

// const c = obj.b;

// obj.b();
// c();

//foo undefined

//----------------------------------------------------------------------------------------
// let n = 10;

// while (n >= 1) {
//   console.log(n);
//   n--;
// }

// do {
//   console.log(n);
//   n++;
// } while (n <= 10);

//----------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   // resolve("resolved");
//   reject("rejected");
// });

// promise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });
// console.log("this is how the promise object looks like", promise); Promise { <resolved>'resolved'}
// console.log(typeof promise); //object

//------------------------------------------------------------------------------------------

//higher order function

// function higherOrder(callback) {
//   console.log("inside the higher order function");
//   callback("Called inside the function");
// }
// function callback(msg) {
//   console.log(msg);
// }
// higherOrder(callback);

//--------------------------------------------------------------------------------------------

//break and continue
// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

//----------------------------------------------------------------------------------------------

//hoisting
//let const
// console.log(a);
// let a = 10;

// console.log(a);
// hello();

// var a = 10;
// function hello() {
//   console.log("hello");
// }

//------------------------------------------------------------------------------------------------

// function outer() {
//   let a = 10;
//   inner();
//   function inner() {
//     let a = 11;
//     console.log(a);
//   }
//   console.log(a);
// }
// outer();

//------------------------------------------------------------------------------------------------
//shallow copy and deep copy
//Object.assign(target,source) is used for concatenating objects
// const object1 = { a: 1, b: 2 };
// const object2 = object1;
// object2.name = "arjun";
// console.log(object1);

// const object3 = JSON.parse(JSON.stringify(object2));
// object3.name = "ali";
// console.log(object3);
//--------------------------------------------------------------------------

//spread operator

// let array1 = [1, 3, 4, 5, 6, 7];
// let array2 = [7, 9, 8, 10, 12, 13];
// const array = [...array1, ...array2];
// console.log(array);

// const object1 = {
//   name: "arjun",
//   age: 12,
// };

// const object2 = {
//   height: 184,
//   weight: 78,
// };

// const object = { ...object1, ...object2 };

// console.log(object);

// //rest operator

// function restTest(...args) {
//   console.log(args);
// }
// restTest(1, 2, 3, 4, 5, 6, 7, 8);

// const [a, b, ...rest] = array;
// console.log(a);
// console.log(b);
// console.log(rest);

// function restTest([a, b, ...args]) {
//   console.log(a + "a" + b + "b", args);
// }
// restTest([1, 2, 3, 4, 5, 6, 7, 8]);

//nullish coalcesing operator

// const value = (null || undefined) ?? 100;
// const data = 100 ?? null;
// console.log(value);
// console.log(data);

//------------------------------------------------------------------------

//this of an arrow function

// const person = {
//   name: "Alice",
//   greetArrow: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   greetRegular: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greetRegular();

//-------------------------------------------------------------------------------------

// What is data type?
// JavaScript has 8 main data types:

// String
// Number
// Boolean
// Null
// Undefined
// Bigint
// Symbol
// Object
// The object can be divided into more data types or to be more precise there are data types that are also objects:

// Array
// Object
// Date

//------------------------------------------------------------------

//create a timeout of 5000 ms

// const timer = setTimeout(() => {
//   console.log("timer executed");
// }, 5000);
// clearTimeout(timer);

// let count = 0;
// const data = setInterval(() => {
//   if (count != 5) {
//     console.log("interval");
//     count++;
//   } else {
//     clearInterval(data);
//   }
// }, 1000);

//---------------------------------------------------------------------
// function test() {
//   variable = 10;
// }
// test();
// console.log(variable);

//--------------------------------------------------------------------------------
//label statement

// outerLoop: for (let i = 0; i < 10; i++) {
//   console.log("outer loop");
//   innerLoop: for (let j = 0; j < 10; j++) {
//     console.log("inner loop");
//     if (j == 2) {
//       break innerLoop;
//     }
//   }
// }

// block: {
//   console.log("hello1");
//   console.log("hello2");
//   break block;
//   console.log("hello3");
// }

//------------------------------------------------------------------

// function latest() {
//   let hi = 10;
// }
// (function iife() {
//   let hello = 10;
// })();
// latest();
// console.log(latest.hi);
// console.log(iife.hello);

// (function iife() {
//   let hello = 10;
//   console.log("first function");
// })();
// (function iife() {
//   console.log("function 2nd");
// })();

//-------------------------------------------------------------------------

//prototype

// let mark = {
//   name: "arjun",
//   birthYear: 1992,
//   gender: "male",
// };

// const Person = function (name, birthYear, gender) {
//   (this.name = name), (this.birthYear = birthYear), (this.gender = gender);
// };

// const obj1 = new Person("ali", 2001, "male");
// console.log(obj1);
// Person.prototype.city = "dubai";

//---------------------------------------------

//sum of only positive numbers in a mixed array

// const array = [1, 2, -1, -2, -3, -5, 8, 7];

// const result = array.reduce((accumulator, each) => {
//   if (each > 0) {
//     return accumulator + each;
//   }
//   return accumulator;
// });
// console.log(result);

//-----------------------------------------------------------------------------

//Proxy object

// const target = {
//   name: "arjun",
//   age: 24,
// };
// const handler = {};
// const proxy = new Proxy(target, handler);
// console.log(proxy.name);
// console.log(proxy.age);

//--------------------------------------------------------------------------------

import fs from "fs";
// console.log("before file fetching");

// //async read
// fs.readFile("input.txt", function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("async read", data.toString());
// });

// console.log("after file fetching");

// //sync
// const data = fs.readFileSync("input.txt");
// console.log("Synchronous" + data.toString());

// fs.unlink("input.txt", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("Data added successfully");
// });
// console.log("Date now" + Date.now());
// console.log("New Date" + new Date());

//---------------------------------------------------------------------------

///curriying example

// function volume(length, breadth, height) {
//   console.log("The volume is", length * breadth * height);
// }

// function volume(length) {
//   return function (breadth) {
//     return function (height) {
//       console.log(length * breadth * height);
//     };
//   };
// }
// volume(1)(2)(3);
//----------------------------------------------------------------------------

// polyfills
// Array.prototype.myfilter = function (cb) {
//   const temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) temp.push(this[i]);
//   }
//   return temp;
// };
// const arr = [1, 2, 3, 4, 5];
// const result = arr.myfilter((num) => {
//   return num > 3;
// });

// console.log(result);

//-------------------------------------------------------------------------------------------

// let value = 20;

// switch (value - 10) {
//   case 1:
//     console.log("val1");

//     break;
//   case 10:
//     console.log("val10");

//     break;
//   case 20:
//     console.log("val20");

//     break;

//   default:
//     break;
// }
//---------------------------------------------------------------------------

const singleQuoteString = "I'm a string with a single quote";
console.log(singleQuoteString);
