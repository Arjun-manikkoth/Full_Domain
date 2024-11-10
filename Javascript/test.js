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

//import fs from "fs";
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

// const singleQuoteString = "I'm a string with a single quote";
// console.log(singleQuoteString);

//---------------------------------------------------------------------------------

//callback hell

// function task1(cb) {
//   setTimeout(() => {
//     console.log("Task 1 completed");
//     cb();
//   }, 3000);
// }
// function task2(cb) {
//   setTimeout(() => {
//     console.log("Task 2 completed");
//     cb();
//   }, 2000);
// }
// function task3(cb) {
//   setTimeout(() => {
//     console.log("Task 3 completed");
//     cb();
//   }, 1500);
// }
// function task4(cb) {
//   setTimeout(() => {
//     console.log("Task 4 completed");
//     cb();
//   }, 1000);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("All tasks completed");
//       });
//     });
//   });
// });

// with promise

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("task1");
//     }, 2000);
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("task2");
//     }, 2000);
//   });
// }

// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("task3");
//     }, 2000);
//   });
// }

// function task4() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("task4");
//     }, 2000);
//   });
// }

// task1()
//   .then((msg) => {
//     console.log(msg);
//     return task2();
//   })
//   .then((msg) => {
//     console.log(msg);
//     return task3();
//   })
//   .then((msg) => {
//     console.log(msg);
//     return task4();
//   })
//   .then((msg) => {
//     console.log(msg);
//     console.log("all tasks executed");
//   });

//sum of two numbers using promise

// function num1() {
//   return new Promise((resolve) => {
//     resolve(5);
//   });
// }
// function num2() {
//   return new Promise((resolve) => {
//     resolve(6);
//   });
// }
// const result = Promise.all([num1(), num2()]);
// console.log(result);
// result.then((values) => {
//   console.log(values);
// });

// const p1 = new Promise((resolve) => {
//   resolve(5);
// });

// const p2 = new Promise((resolve) => {
//   resolve(6);
// });

// const fun = async () => {
//   const result = (await p1) + (await p2);
//   console.log(result);
// };

// fun();
//------------------------------------------------------------------------------------------
//aggregation
//match

//----------------\
//sum using recursion

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
// }
// console.log(sum(10));

//---------------------------------------------------------

// const set = new Set([1, 2, 2, 3, 4, 5]);
// set.add(6);
// set.delete(2);
// set.clear();
// console.log(set.has(8));
// console.log(set);

//--array methods

// const string = "hello";
// const array = Array.from(string);
// console.log(array.slice(1, 2));
// console.log(array.splice(1, 2, "h", "i", "h"));
// console.log(array);
//-------------------------------------------------------------------------------

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   getSize() {
//     return this.size();
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }
//   search(value) {
//     if (this.isEmpty()) {
//       console.log("The list is empty");
//       return;
//     } else {
//       let curr = this.head;
//       let i = 0;
//       while (curr) {
//         if (curr.value === value) {
//           return i;
//         } else {
//           curr = curr.next;
//           i++;
//         }
//       }
//     }
//   }
//   remove(i) {
//     let removed;
//     if (i < 0 || i >= this.size) {
//       console.log("Invalid Index");
//       return null;
//     } else if (i === 0) {
//       removed = this.head;
//       this.head = removed.next;
//     } else {
//       const prev = this.head;
//       for (let j = 0; j < i - 1; j++) {
//         prev = prev.next;
//       }
//       removed = prev.next;
//       prev.next = removed.next;
//     }
//     this.size--;
//     return removed;
//   }
//   print() {
//     let curr = this.head;

//     while (curr) {
//       console.log(curr.value);
//       curr = curr.next;
//     }
//   }
//   reverse() {
//     let curr = this.head;
//     let next;
//     let prev = null;
//     while (curr) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }
// }
// const linkedList = new LinkedList();

// linkedList.append(4);
// linkedList.append(5);
// linkedList.prepend(3);
// linkedList.remove(0);
// linkedList.print();
// linkedList.reverse();
// linkedList.print();

//---------------------------------------------------------------------------------
// function binarySearch(arr, element) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex < rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (arr[middleIndex] === element) {
//       console.log("Element found");
//       return true;
//     } else if (element < arr[middleIndex]) {
//       leftIndex = 0;
//       rightIndex = middleIndex - 1;
//     } else if (arr[middleIndex] < element) {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   console.log("element not found");
// }
// binarySearch([1, 2, 3, 4, 5, 7], 10);
//

// var nestedArray = [23, [3, 3, 32, 2], [[112, 21], 12], 123];
// const result = nestedArray
//   .flat()
//   .flat()
//   .reduce((acc, value) => {
//     return acc + value;
//   });
// console.log(result);

// var randomObjArray = [
//   { a: [1, 2, 5], b: 12 },
//   { ba: [1, 2, 5], ss: 12 },
//   { aw: [1, 2, 5], qw: 12 },
// ];

// const result = randomObjArray.map((each) => {
//   return Object.values(each);
// });
// console.log(result.flat(3));
//bubble sort
//selection sort
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     let index = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//         index = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[index];
//     arr[index] = temp;
//   }
//   return arr;
// }
// console.log(selectionSort([6, 3, 4, 2, 1]));

//

// let string = "aaaaaaaaathis is a seaaaaaaaaaaaaantence ";
// let longest = "";
// let temp = "";
// let arr = [];

// for (let i = 0; i < string.length; i++) {
//   if (string[i] == " ") {

//   } else if () {

//   }
// }

// console.log("The longest string is:", longest);
// var os = require("os");
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
// console.log("Uptime: " + os.uptime());

//remove duplicate even numbers from the array

// const array = [1, 2, 3, 2, 4, 4, 5, 6, 7];

// array.sort();

// for (let i = 1; i < array.length; i++) {
//   if (array[i - 1] % 2 === 0 && array[i] === array[i - 1]) {
//     array.splice(i - 1, 2);
//   }
// }
// console.log(array);

//sort array of objects

// let array = [
//   { name: "arjun", age: 24 },
//   { name: "aswin", age: 22 },
//   { name: "anand", age: 25 },
// ];

// array.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(array);

//string is palindrome or not

// let string = "malayalam";

// // let newString = string.split("").reverse().join("");
// // if (string === newString) console.log("palindrome");
// // else console.log("Not palindrome");

// const strArray = [];
// let newString = "";
// for (char of string) {
//   strArray.push(char);
// }

// for (let i = 0, j = strArray.length - 1; i < strArray.length / 2; i++, j--) {
//   let temp = strArray[i];
//   strArray[i] = strArray[j];
//   strArray[j] = temp;
//   console.log(strArray[i], strArray[j]);
// }
// console.log(strArray);
// for (let i = 0; i < strArray.length; i++) {
//   newString = newString + strArray[i];
// }
// if (newString === string) console.log("palindrome");
// else console.log("Not palindrome");

// let str = "malayalam";

// for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
//   if (str[i] != str[j]) {
//     console.log("The string is not palindrome");
//     break;
//   }
// }

// //
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// let count = 0;
// let result = array.filter((each) => {
//   let flag = 0;
//   for (let i = 2; i <= each / 2; i++) {
//     console.log((count = count + 1));
//     if (each % i === 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (each <= 1) {
//     flag = 1;
//   }
//   return flag === 0;
// }).reduce((acc,item) => {
//   return acc + item;
// })
// console.log(result);
//find the second largest and least from the array

// let array = [1, 3, 4, 5, 6, 7, 8, 9];
// let largest = array[0];
// let secondLargest;
// let smallest = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (array[i] > largest) {
//     secondLargest = largest;
//     largest = array[i];
//   }
//   if (array[i] < smallest) {
//     smallest = arr[i];
//   }
// }
// console.log(
//   `The second largest and least elements would be ${secondLargest} and ${smallest}`
// );
// //shallow copy
// let map = new Map([[1, 2]]);

// console.log(map.size);

//linked list

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   append(value) {
//     let node = new Node(value);
//     if (this.size === 0) {
//       this.head = node;
//       this.size++;
//     } else {
//       let curr = this.head;

//       while (curr.next) {
//         curr = curr.next;
//       }
//       curr.next = node;
//       this.tail = curr.next;
//       this.size++;
//     }
//   }
//   prepend(value) {
//     let node = new Node(value);

//     if (this.size === 0) {
//       this.head = node;
//       this.size++;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//   }
//   search(value) {
//     if (this.size === 0) {
//       console.log("The list is empty");
//       return;
//     } else {
//       let index = 0;
//       let curr = this.head;
//       while (curr) {
//         if (curr.value === value) {
//           console.log("Element found at index " + index);
//           return;
//         }
//         index++;
//         curr = curr.next;
//       }
//     }
//   }
//   removeNode(index) {
//     if (index < 0 || index >= this.size) {
//       console.log("Invaid Index");
//       return;
//     } else {
//       if (index === 0) {
//         this.head = this.head.next;
//       }

//       this.size--;
//     }
//   }
//   removeDuplicates() {
//     let outer = this.head;
//     let inner;
//     while (outer != null) {
//       inner = outer;
//       while (inner.next != null) {
//         if (inner.next.value === outer.value) {
//           inner.next = inner.next.next;
//           this.size--;
//         } else {
//           inner = inner.next;
//         }
//       }
//       outer = outer.next;
//     }
//   }
//   reverse() {
//     if (this.size === 0) {
//       console.log("Empty List");
//       return;
//     } else {
//       let prev = null;
//       let curr = this.head;
//       let next;

//       while (curr) {
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//       }
//       this.head = prev;
//     }
//   }

//   print() {
//     let curr = this.head;
//     let string = "";
//     while (curr) {
//       string = string + curr.value + ",";
//       curr = curr.next;
//     }
//     console.log(string);
//   }
// }
// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);
// linkedList.removeDuplicates();
// linkedList.print();
// linkedList.reverse();
// linkedList.print();

//

//linked list with tail

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   prepend(value) {
//     let node = new Node(value);

//     if (this.size === 0) {
//       this.head = node;
//       this.tail = node;
//       this.size++;
//     } else {
//       node.next = this.head;
//       this.head = node;
//       node.next.prev = node;
//       this.size++;
//     }
//   }
//   append(value) {
//     let node = new Node(value);

//     if (this.size === 0) {
//       this.head = node;
//       this.tail = node;
//       this.size++;
//     } else {
//       let end = this.tail;
//       end.next = node;
//       node.prev = end;
//       this.tail = node;
//       this.size++;
//     }
//   }
//   removeFromFront() {
//     if (this.size === 0) {
//       console.log("The list is empty");
//       return;
//     } else {
//       if (this.size === 1) {
//         this.head = null;
//         this.tail = null;
//         this.size--;
//       } else {
//         this.head = this.head.next;
//         this.size--;
//       }
//     }
//   }
//   removeFromBack() {
//     if (this.size === 1) {
//       this.head = null;
//       this.tail = null;
//       this.size--;
//     } else {
//       let curr = this.head;
//       while (curr.next != this.tail) {
//         curr = curr.next;
//       }
//       curr.next = null;
//       this.tail = curr;
//       this.size--;
//     }
//   }
//   reverse() {
//     let curr = this.head;
//     let next;
//     let prev = null;

//     while (curr) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.tail = this.head;
//     this.head = prev;
//   }
//   print() {
//     let curr = this.head;
//     let string = "";
//     while (curr) {
//       string = string + curr.value + " ";
//       curr = curr.next;
//     }
//     console.log(string);
//   }
// }
// const linkedList = new LinkedList();
// linkedList.prepend(1);
// linkedList.prepend(2);
// linkedList.prepend(3);
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.print();
// linkedList.removeFromFront();
// linkedList.removeFromBack();
// linkedList.reverse();
// linkedList.print();

//
// const map = new Set([1, 3, 3, 2, 1, 2]);

// console.log(typeof   map.values());

// let hello = function (n) {
//   if (n === 1) return 1;
//   return n * hello(n - 1);
// };
// console.log(hello(5));

//linear search

// let array = [1, 2, 3, 4, 5];
// let target = 3;

// function binarySearch(array, target) {
//   binarySearchRecurive(array, target, 0, array.length - 1);
// }
// function binarySearchRecurive(array, target, leftIndex, rightIndex) {
//   while (leftIndex <= rightIndex) {
//     middle = Math.floor((leftIndex + rightIndex) / 2);
//     if (array[middle] === target) {
//       console.log(`Element found at ${middle} with binary search recursive`);
//       return target;
//     } else if (arr[middle] < target) {
//       leftIndex = 0;
//       rightIndex = middle - 1;
//       binarySearchRecurive(array, target, leftIndex, rightIndex);
//     } else {
//       leftIndex = middle + 1;
//       rightIndex = array.length - 1;
//       binarySearchRecurive(array, target, leftIndex, rightIndex);
//     }
//   }
// }
// binarySearch(array, target);

///reverse a string using recursion

// function reverseStringRecursion(str) {
//   if (str.length === 1) {
//     return str;
//   }
//   return reverseStringRecursion(str.substring(1)) + str.charAt(0);
// }
// console.log(reverseStringRecursion("hello world"));

//bubble sort

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j + 1] < arr[j]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([5, 2, 1, 4, 8, 3]));
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (key < arr[j] && j >= 0) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// console.log(insertionSort([6, 4, 3, 2, 9, 5]));

//quick sort
// function quickSort(arr) {
//   let pivot = arr[arr.length - 1];
//   let leftArray = [];
//   let rightArray = [];

//   if (arr.length <= 1) {
//     return arr;
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArray.push(arr[i]);
//     } else {
//       rightArray.push(arr[i]);
//     }
//   }
//   return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
// }
// console.log(quickSort([6, 4, 3, 2, 9, 5]));

//merge sort

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);
//   let leftArray = arr.slice(0, mid);
//   let rightArray = arr.slice(mid);
//   return merge(mergeSort(leftArray), mergeSort(rightArray));
// }
// function merge(leftArray, rightArray) {
//   let sortedArray = [];
//   while (leftArray.length && rightArray.length) {
//     if (leftArray[0] < rightArray[0]) {
//       sortedArray.push(leftArray.shift());
//     } else {
//       sortedArray.push(rightArray.shift());
//     }
//   }
//   return [...sortedArray, ...leftArray, ...rightArray];
// }
// console.log(mergeSort([8, 5, 3, 9, 2, 1]));

//selection sort
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     let index = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//         index = j;
//       }
//     }
//     let temp = arr[index];
//     arr[index] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }
// console.log(selectionSort([8, 5, 3, 9, 2, 1]));

//binary tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    if (this.isEmpty()) {
      this.root = new Node(value);
    } else {
      this.insertNode(this.root, new Node(value));
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (!root.right) {
        root.left = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else if (value > root.value) {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue) {
      let temp = queue.shift();
      console.log(temp);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }
  min(root) {
    if (!root) {
      console.log("No min element");
      return;
    } else {
      if (!root.left) {
        return root.left;
      } else {
        this.min(root.left);
      }
    }
  }
  isValidBST() {
    return this.isValidHelper(this.root, -Infinity, Infinity);
  }
  isValidHelper(node, min, max) {
    if (!node) {
      return false;
    }
    if (node.value <= min || node.value >= max) {
      return false;
    }
    return (
      this.isValidHelper(node.left, min, node.value) &&
      this.isValidHelper(node.right, node.value, max)
    );
  }

  height(node = this.root) {
    if (!node) {
      return -1; // Return -1 to count edges; use 0 if counting nodes
    }
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
