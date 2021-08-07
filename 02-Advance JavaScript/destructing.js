// ------------- Destructing array

var user = ["Hamza", 22];
// let name = user[0]
// let age = user[1]
var [name, age = 12] = user;

console.log("name ", name);
console.log("age ", age);

var user = ["Hamza", 22, ["Karachi"]];
// let name = user[0]
// let age = user[1]
var [name, age, [city]] = user;

console.log("name ", name);
console.log("city ", city);

// ----------- Destructing objects

var user = {
  name: "Hamza",
  city: "Karachi",
  age: 25,
};

var { name, age } = user;

console.log(name, age);
console.log(user.name, user.city, user.age);

var { name: n, age: a } = user;

console.log(n, a);
