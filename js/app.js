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
    query: ko.observable(''),
    beers: ko.observableArray(beers),

    search: function(value) {

     viewModel.beers.removeAll();

      for(var x in beers) {
      if(beers[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        viewModel.beers.push(beers[x]);
      }
    }
  }
};
ko.applyBindings(viewModel);

viewModel.query.subscribe(viewModel.search);
 






