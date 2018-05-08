const yargs = require("yargs");
const geocode = require("./geocode/geocode.js")
const request = require("request");
const weather = require("./weather/weather")

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for.",
            string: true,
        }
})
.help()
.alias( "help", "h")
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage)
    } else {
        weather.getWeather(results.latitude, results.longitude,  (errorMessage, weatherResults) => {
            if (errorMessage) {
                callback(errorMessage)
            } else {
                console.log(weatherResults)
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemp}`)
            }
        });
    }
});

// var latitude = "36.744326";
// var longitude = "-4.567209"


