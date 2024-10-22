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
