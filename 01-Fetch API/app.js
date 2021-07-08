// Get API

// put  api in variable
const api = fetch("https://jsonplaceholder.typicode.com/todos/1");

// print api
console.log(api);
// it returns a promise

// create async function

async function getAPI() {
  const api1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log(api1);

  let apiInJson = await api1.json();
  console.log(apiInJson);
}

getAPI();

// Post API

async function postAPI() {
  const api2 = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Ameer Hamza",
      body: "He is a boy",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  console.log(api2);

  let apiInJson = await api2.json();
  console.log(apiInJson);
}

postAPI();