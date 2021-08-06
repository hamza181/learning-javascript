// ------------------Object literals

let a = "name";
let b = "Hamza";
let c = "student ";

var obj = {
  [a]: b,
  [c + a]: b,
};

console.log(obj);

var obj = {
  name: "Ameer",
  // show: function(){
  //     return this.name
  // }
  show() {
    return this.name;
  },
  'show detail'() {
    return this.name;
  },
};

console.log(obj.show());
console.log(obj['show']());

