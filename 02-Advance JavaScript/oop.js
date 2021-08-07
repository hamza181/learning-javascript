// -------------- OOP

class student {
  constructor(name) {
    let stName = name;
    let age
    console.log("constructor");
  }

  hello() {
    console.log("Hello " + this.stName + " " + this.age);
  }
}

let a = new student("Hamza");
a.age = 22
a.hello();
