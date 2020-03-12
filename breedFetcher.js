const request = require('request');
const args = process.argv.slice(2);
const fetchBreedDescription = function(breedName, cb) {


request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
 
  if (error) {
    cb( error, null); // Print the error if one occurred
  }
  if (body === '[]') {
    cb("No Breed",null);
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    cb("No Breed",null);
  } else {

    cb(null,data[0].description.trim());
  }
});

};

module.exports = { fetchBreedDescription };