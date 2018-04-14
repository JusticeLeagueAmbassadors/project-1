// Weather API Key Coding Begins
var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";

var queryWeatherURL = "https://api.openweathermap.org/data/2.5/weather?" +
 + weatherAPIKey;

$.ajax({
  url: queryWeatherURL,
  method: "GET"
})
// Weather API Key Coding Ends

// Currency API Key Coding Begins
var queryCurrencyURL = "http://data.fixer.io/api/latest?access_key=943b426312d481a06ca58681641063cf"

$.ajax({
  url: queryCurrencyURL,
  method: "GET"
})
// Curency API Key Coding Ends

// Air Travel API Key Coding Begins
// var airTravelAPIKey = 
// var queryAirTravelURL = 

// $.ajax({
//   url: queryAirTravelURL,
//   method: "GET"
// })
// Weather API Key Coding Ends