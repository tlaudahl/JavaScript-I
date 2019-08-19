// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => console.log("Function was invoked!");
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = param => param;
anotherFunction("Travis");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (num1, num2) => num1 + num2;

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (num1, num2) => num1 - num2;

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let exArr = [1,2,3,4];
const triple = exArr.map(e => e * 3);
console.log(triple);