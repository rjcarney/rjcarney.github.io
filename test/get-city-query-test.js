describe('test getCityQuery', function() {
  it('should return the entered value', function() {
    var domElement = { value: 'Detroit' };
    sandbox.stub(document, 'getElementById')
      .withArgs('city-query')
      .returns(domElement);

    var city = getCityQuery();

    expect(city).to.be.eql(domElement.value);
  });
});
