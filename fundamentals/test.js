/*
if (window.localStorage) {
  console.log('The local storage is supported');
}
*/

let message;
message="Hello";
console.log(typeof message)

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity);

console.log(Number.MIN_VALUE);

let str="javascript";
str += " string";
console.log(str);

str[0]="A"; // cannot modify string. (immutable)
console.log(str);

const objPerson={
	firstname:"krishna",
	lastname:"mandal"
}

console.log(objPerson)

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
console.log(contact.phone)
console.log(contact.address.street)
console.log(contact["address"]["state"])

let error = '';
if (error) {
  console.log(error);
}

// --------------------------------

let name="john";
console.log(`the name is : ${name}`);
console.log(name.length); // 4
console.log(name[2]);// h => 3rd index
console.log(name[name.length-1]);