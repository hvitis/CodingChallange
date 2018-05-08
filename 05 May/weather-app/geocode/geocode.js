const request = require("request");

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  // Nawias normalny jest do wywolania funkcji ktora
  // zdarzy sie po tym jak data wroci z google API
  // callback jest tym co zostaje wywolane po otrzymaniu danych
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,

      // Zamienia json na objekt
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to get the proper response : ERROR" + error);
      } else if (body.status === "ZERO_RESULT") {
        callback("Unable to find that adress");
      } else {
        callback(
          null,
          {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          },
          console.log(JSON.stringify(body, null, 2))
        );
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
