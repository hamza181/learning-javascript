// ---------- spread operator

// in array

var arr1 = [1, 2, 3];
console.log("arr1 ", arr);
console.log("arr1 with spread operator", ...arr);
console.log("arr1 cloning", [...arr]);

var arr2 = [3, 5, 6];
var arr3 = [2, 9, 5];

var arr4 = [arr2, arr3];
console.log(arr4);

var arr4 = [...arr2, ...arr3, 33];
console.log(arr4);

// in object

var obj1 = {
  name: "Ameer Hamza",
};

var obj2 = {
  age: 22,
};

var obj3 = {
  obj1,
  obj2,
};

console.log(obj3);

var obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);
