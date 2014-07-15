
var r = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



function AppViewModel() {
    this.firstName = ko.observable("Chris");
    this.lastName = ko.observable("Dieckhaus");
    this.randomNumber = ko.observable(0);
    this.prayers = prayers["name"];
    this.getRandomNumber = function(){
      this.randomNumber(r(0,10));
    };
    
}

// Activates knockout.js
$(document).ready(function() {
    ko.applyBindings(new AppViewModel());
});

var prayers = {"name":"Our Father",
  "text":"Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come, Thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen."};
