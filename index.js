// index.js
//const { fetchMyIP , fetchCoordsByIP } = require('./iss');
//const { fetchMyIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});
*/
/*fetchCoordsByIP("99.235.134.18" , (error,data) => {
  console.log(error, data);
});
*/

/*fetchISSFlyOverTimes({ latitude: 43.693, longitude: -79.8365 },(error,data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned flyovertimes:' , data);
});
*/

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});