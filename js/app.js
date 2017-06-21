var beers = [
  {name:"Dragon's Milk", 
  brewery:"New Holland Brewing Company", 
  style:"mperial Stout"},

  {name:"Oberon ", 
  brewery:"Bell's ", 
  style:"Wheat"},

  {name:"Oberon ", 
  brewery:"Bell's ", 
  style:"Wheat"},
];

var viewModel = {
  beers: ko.observableArray(beers)
};

ko.applyBindings(viewModel);


//query is observable aatribute
var viewModel = {


  query: ko.observable('')
}

var viewModel = {
  // …

  search: function(value) {
    // remove all the current beers, which removes them from the view
    viewModel.beers.removeAll();

    for(var x in beers) {
      if(beers[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        viewModel.beers.push(beers[x]);
      }
    }
  }
};

viewModel.query.subscribe(viewModel.search);
