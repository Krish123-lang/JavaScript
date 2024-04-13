const firstObj={
	fname:"Krishna",
	lname:"mandal"
};

firstObj.fname="nobita"; // modifies fname
// console.log(firstObj.fname); // nobita

firstObj.address="Japan";
firstObj.phone="0123456789";
console.log(firstObj); // adds address and phone in firstObj

//delete firstObj.lname;
//console.log(firstObj); // deletes lname from firstObj

// Use the "in" operator to check if a property exists in an object.
console.log("fname" in firstObj); // true
console.log("mandal" in firstObj); // false