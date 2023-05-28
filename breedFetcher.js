const request = require('request');

const args = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;


// console.log(url);


request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    // console.log(body);
    const data = JSON.parse(body);
    // console.log(data);
    if (data.length > 0) {
      console.log(data[0].description);
    }
  }
});