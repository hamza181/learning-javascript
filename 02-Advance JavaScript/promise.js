// ------------ Promise

function prom(complete) {
  return new Promise(function (resolve, reject) {
    if (complete) {
      resolve("Successful");
    } else {
      reject("Fail");
    }
  });
}

console.log(prom(true));
console.log(prom(false));

// --------------------------------------------

function prom1(complete) {
  return new Promise(function (resolve, reject) {
    console.log("Fetching data");
    setTimeout(() => {
      if (complete) {
        resolve("Successful");
      } else {
        reject("Fail");
      }
    }, 3000);
  });
}

let onfulfil = (result) => {
  console.log(result);
};

let onreject = (error) => {
  console.log(error);
};

prom1(false).then(onfulfil).catch(onreject);

// same as above
prom1(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//  --------------------------- Promise.all()

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1");
    resolve(1);
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2");
    resolve(2);
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 3");
    resolve(3);
  }, 3000);
});

let total = 0;

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(`Result: ${result}`);

    for(let i in result){
        total += result[i];
    }

    console.log('Total => ', total);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
