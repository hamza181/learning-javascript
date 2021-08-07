// ---------------  fetch data from txt file

// only works on live server

fetch("readme.txt")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.write(data);
  })
  .catch((error) => {
    console.log(error);
  });


  fetch("readme.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    for (let i in data){
        console.log('Name: ', data[i].name);
    }
  })
  .catch((error) => {
    console.log(error);
  });