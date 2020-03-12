const request = require('request');
const args = process.argv.slice(2);

request('https://api.thedcatapi.com/v1/breeds/search?q=' + args[0], (error, response, body) => {
 
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  if (!response) {
    console.log("Cannot find page");
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("ERROR Breed not found");
  } else {

    console.log(data[0].description);
  }
});