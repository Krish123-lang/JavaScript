const numbers = [1, 2, 3, 4, 5]
const num2 = [5, 4, 3, 2, 1] // [ 10, 8, 6, 4, 2 ]
const doubles = num2.map(item => item * 2) // [ 2, 4, 6, 8, 10 ]
console.log(doubles);


const n = [1, 2, 3, 4, 5]
const evens = n.map(item => item % 2 === 0)
console.log(evens); // [ false, true, false, true, false ]