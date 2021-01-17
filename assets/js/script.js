var apiKey = "e2ff381169e010bdeac6fd79eab4293a";
var searchBtn = $(".searchBtn");
var searchInput = $(".searchInput");

//  Grabbing search for city/Left column locations
var cityNameEl = $(".cityName");
var currentDateEl = $(".currentDate");
var weatherIconEl = $(".weatherIcon");
var searchHistoryEl = $(".historyItems");

// Grabbing the weather details in right column locations
var tempEl = $(".temp");
var humidityEl = $(".humidity");
var windSpeedEl = $(".windSpeed");
var uvIndexEl = $(".uvIndex");
var cardRow = $(".card-row");

// Creating the variables for current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;