var getCityQuery = function() {
  return document.getElementById('city-query').value;
}

var createURL = function(city) {
  var apiKey = 'ce332f75c1b1e3976e9c4bb4fcdab7d6';

  if(city)
    return 'api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  return '';
}
