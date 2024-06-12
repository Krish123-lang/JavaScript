const person = new Object()

person.name = "krishna";
person.age = 24;
person.address = "katahari";

person.fun = function greet(name) {
    console.log("Hello world", name)
}

console.log(`Hello, ${person.name}`);
person.fun(person.name);

/*
Hello, krishna
Hello world krishna
*/
