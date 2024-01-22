let weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
 
weather.find({search: 'Kathmandu, Nepal', degreeType: 'C'}, (err, result) => {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});