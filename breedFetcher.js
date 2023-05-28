const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
        
    if (error) {
      callback(error, null);
    } else {
      const gatitos = JSON.parse(body);
      if (gatitos.length > 0) {
        callback(error, gatitos[0].description);
      } else {
        callback(new Error(`Could not find ${breedName}`), null);
      }
      
    }
        
        
  });
};

module.exports = { fetchBreedDescription };
