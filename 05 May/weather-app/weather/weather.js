var request = require('request');

getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/9bdccfc9d0b9175783d1efdd8518f854/${latitude},${longitude}`,
        json: true,
    }, (error, response, body) => {
        if (error) {
            callback("err");
        } else if (response.statusCode === 200) {
            // console.log(body.currently),
            callback(undefined,
                {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature,
                    summary: body.currently.summary,
                    precipType: body.currently.precipType
                });
        }
    })
};
module.exports.getWeather = getWeather;

