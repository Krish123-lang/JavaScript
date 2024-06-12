let name = "krishna mandal";

// *** TO GET LENGTH OF THE STRING ***
// console.log(name.length); // 14

// -------------------------------------------------------------------

// *** Extracting String Characters ***
// console.log(name.at(4)); // h => is at index 4
// console.log(name.charAt(4)); // h => is at index 4
// console.log(name.charCodeAt(4)); // 104

// -------------------------------------------------------------------

// *** Slicing ***  
// console.log(name.slice(0, 4)); // kris
// console.log(name.substring(0, 4)); // kris
// console.log(name.substr(5, name.length)); // na mandal

// -------------------------------------------------------------------

// *** Casing *** 
// console.log(name.toUpperCase()); // KRISHNA MANDAL
// console.log(name.toLowerCase()); // krishna mandal

// -------------------------------------------------------------------

// *** Concat ***
// let name2="Hello world";
// console.log(name.concat(" ", name2)); // krishna mandal Hello world

// -------------------------------------------------------------------

// let a = "5";
// let a = 5;
// a = a.toString() // changing the number to string

// -------------------------------------------------------------------

// *** String Padding ***
// console.log(a.padStart(6, "d")) // ddddd5
// console.log(a.padEnd(6, "d")) // 5ddddd

// -------------------------------------------------------------------

// *** String Repeat ***
// console.log(name.repeat(5)); // krishna mandalkrishna mandalkrishna mandalkrishna mandalkrishna mandal

// -------------------------------------------------------------------

// *** Replace() ***
// console.log(name.replace('mandal', "apple")); // krishna apple

// -------------------------------------------------------------------

// *** ReplaceAll() ***
// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// console.log(text.replaceAll("Cats", "Dogs")); // I love cats. Dogs are very easy to love. Dogs are very popular.
// console.log(text.replaceAll("cats", "dogs")); // I love dogs. Cats are very easy to love. Cats are very popular.

// -------------------------------------------------------------------

// *** To Array ***
let text="a,p,ple";
// console.log(text.split("")); // [ 'a', 'p', 'p', 'l', 'e' ]
console.log(text.split(",")) // [ 'a', 'p', 'ple' ]