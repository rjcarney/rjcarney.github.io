describe('createURL test', function() {
  it('should return proper url given city name', function() {
    var city = 'Detroit';
    var apiKey = 'ce332f75c1b1e3976e9c4bb4fcdab7d6';

    var url = createURL(city);

    expect(url).to.be.eql('api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey);
  });

  it('should return proper url given another city name', function() {
    var city = 'Ann Arbor';
    var apiKey = 'ce332f75c1b1e3976e9c4bb4fcdab7d6';

    var url = createURL(city);

    expect(url).to.be.eql('api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey);
  });

  it('should return empty string when city is undefined', function() {
    var city = undefined;
    var apiKey = 'ce332f75c1b1e3976e9c4bb4fcdab7d6';

    var url = createURL(city);

    expect(url).to.be.eql('');
  });
})
