/*
setTimeout(()=>{
	alert("Hello");
}, 3000);
*/
// -----------------------

let timeoutID;
function showAlert(){
	timeoutID=setTimeout(alert, 500, 'setTimeout demo !');
}

function cancelAlert(){
	clearTimeout(timeoutID);
}