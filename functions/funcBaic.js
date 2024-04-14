/*
function hello(name){
	return `hello ${name}`;
}

let h=hello("krishna");
console.log(h) //hello krishna

function sums(a,b){
	return `Sum: ${a+b}`;
}

let s=sums(5,2);
console.log(s); // Sum: 7


function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
c=compare(4,2)
console.log(c)
*/

// ------ Arrow function ------

//let add = (a,b)=>a+b;
//a=add(4,2);
//console.log(a) // 6

function square(x){
	x=x*x;
	return x;
}

let y=5;
let result=square(y);
console.log(result) // 25
