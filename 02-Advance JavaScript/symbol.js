// ------------- Symbol

let id1 = Symbol("Hello");
let id2 = Symbol("Hello");

console.log(id1 == id2); // return false
console.log(id1.description);
console.log(id1.toString());
console.log(id1);

let str1 = "Hello";
let str2 = "Hello";

console.log(str1 == str2); // return true
