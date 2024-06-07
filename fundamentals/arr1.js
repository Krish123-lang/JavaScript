let arr1=[1,2,3,4,5,6,'krishna'];

for(let i=0; i<arr1.length; i++){
	console.log(arr1[i]);
}

console.log(typeof arr1); // object

let strArr1 = arr1.toString();
console.log(typeof strArr1); // string

let c = arr1.join(' and ');
console.log(c) // 1 and 2 and 3 and 4 and 5 and 6 and krishna

// pop()

// arr1.pop();
console.log(arr1); // krishna will be eliminated

// push()

//arr1.push(69);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 'krishna', 69 ]

// delete()

delete arr1[0];
console.log(arr1); // [ <1 empty item>, 2, 3, 4, 5, 6, 'krishna' ]