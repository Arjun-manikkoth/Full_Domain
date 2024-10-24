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
