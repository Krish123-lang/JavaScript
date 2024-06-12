/*
var counter = 1;
var showCounter = () => console.log(counter);

console.log(window.counter);
window.showCounter();
*/
//----------------------------------------------------------------------
/*
const width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
const height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;    

console.log(width);
console.log(height);
*/

//----------------------------------------------------------------------
/*
let url = 'https://www.google.com/', features = 'height=600,width=800';
let jsWindow = window.open(url,'google');

// first open google.com in new tab then after 3 seconds opens github.com in a new tab

setTimeout(() => {
	window.open('https://github.com/', 'github')
}, 3000); 
console.log(url);
console.log(jsWindow);
*/