
var r = function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
};



function AppViewModel() {
    this.firstName = "Chris";
    this.lastName = "Dieckhaus";
    this.randomNumber = r(0,10);
}

// Activates knockout.js
$(document).ready(function() {
    ko.applyBindings(new AppViewModel());
});
