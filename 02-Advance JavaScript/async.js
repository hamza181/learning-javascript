//  ---------------   async function

// async make promise function

let test = async () => {
  return "Hello";
};

test().then((result) => {
  console.log(result);
});

// --------------------

async function fun1() {
  console.log("1");
  await console.log("2"); // is line k bad sab line w8 kren gi
  console.log("3");
}

console.log("4");
fun1();
console.log("5");
