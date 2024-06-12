let arr1=[4,3,"krishna", true, 5.3];
// console.log(arr1);

//let scores = new Array();

// scores=Array(10); // defines length of an empty array => 10

let scores = new Array(34,23,45,6); // creates an array

//console.log(scores.length); // 10
//console.log(typeof scores); // object
//console.log(scores[0])// 34

let alphabets=['a', 'b','c','d','e'];
//alphabets.push('f'); // adds 'f' to the end of the array
//alphabets.unshift('-a;') // adds '-a' to the begining of the array
//alphabets.pop();// removes an element from the end of the array
//alphabets.shift(); // removes 'a' from the array
//console.log(alphabets.indexOf('c')); // 2

console.log(Array.isArray(arr1)); // true => To check if a value is an array, we use Array.isArray() method
console.log(alphabets)