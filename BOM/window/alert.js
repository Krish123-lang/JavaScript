/*
// ------- ALERT --------
setTimeout(()=>{
	alert("3 seonds passed !") // prints after 3 seconds has been passed
}, 3000);
*/
//----------------------------------------------------------------------------------
// ------- CONFIRM --------
/*
let result=confirm("Are you sure ?");
let message = result ? "You clicked ok" : "You clicked cancel";
alert(message);
*/
//----------------------------------------------------------------------------------
// ------- PROMPT --------
let name = prompt("enter name: ");
let age = prompt("enter age: ");
age=Number(age);

alert(`hello, ${name}. You are ${age} years old`);
console.log(typeof name)// string
console.log(typeof age) // number