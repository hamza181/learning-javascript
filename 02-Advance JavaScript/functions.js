//-------------- function with multiple arguments

function sum() {
    let sum = 0;
  
    for (let i in arguments) {
      // sum = sum + arguments[i]
      sum += arguments[i];
    }
  
    console.log("sum => ", sum);
  }
  
  sum(1, 2, 3);
  
  // ----------- function with multiple and different arguments
  
  function sum1(name, ...args) {
    let sum = 0;
  
    for (let i in args) {
      sum += args[i];
    }
  
    console.log("sum1 => ", name, sum);
    console.log("arguments ", arguments);
  }
  
  sum1("Hamza", 1, 2, 3);
  
  let arr = [1, 2, 3];
  
  // take array values as seperate arguments
  sum1("with array  ", ...arr);
  