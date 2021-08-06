// ------------- Destructing array

var user = ["Hamza", 22];
// let name = user[0]
// let age = user[1]
var [name, age=12] = user;

console.log("name ", name);
console.log("age ", age);

var user = ["Hamza", 22, ["Karachi"]];
// let name = user[0]
// let age = user[1]
var [name, age, [city]] = user;

console.log("name ", name);
console.log("city ", city);

// ----------- Destructing objects

