let arr1=[1,2,56,16,0, 5,2,8,98,905];

function compare(a, b){
	return a-b; // descending b-a
}

/*
let compare = (a,b)=>{
	return a-b;
}
*/

console.log(arr1.sort(compare));
/*
[
  0,  1,  2,  2,   5,
  8, 16, 56, 98, 905
]
*/


//console.log(arr1.sort());
/*
[
  0,  1, 16,   2,  2,
  5, 56,  8, 905, 98
]
*/

console.log(arr1.reverse());
/*
[
  905, 98, 56, 16, 8,
    5,  2,  2,  1, 0
]
*/