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

//console logging search history loaded into local storage
if (JSON.parse(localStorage.getItem("searchHistory")) === null) {
    console.log("searchHistory not found")
}else{
    console.log("searchHistory loaded into searchHistoryArr");
    renderSearchHistory();
}

//function to recognize if there is an input when search button is clicked
searchBtn.on("click", function(e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("clicked button")
    getWeather(searchInput.val());
});

//console log history item clicked
$(document).on("click", ".historyEntry", function() {
    console.log("clicked history item")
    var thisElement = $(this);
    getWeather(thisElement.text());
})