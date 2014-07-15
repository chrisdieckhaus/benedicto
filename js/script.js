
var r = function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
};



function AppViewModel() {
    this.firstName = ko.observable("Chris");
    this.lastName = ko.observable("Dieckhaus");
    this.randomNumber = r(0,10);
}

// Activates knockout.js
$(document).ready(function() {
    ko.applyBindings(new AppViewModel());
});
