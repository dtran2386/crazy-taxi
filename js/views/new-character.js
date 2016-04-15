// New character view: shows a form to create a new character
module.exports = Backbone.View.extend({
    events: {
        'click #create-player': 'newCharacter', // when button is clicked, update model with names
    },
    template: _.template(document.getElementById('new-player-template').textContent),
    render: function() {
        this.el.innerHTML = this.template();
    },
    newCharacter: function () {
        console.log('adding a new player in the model');
        this.model.storeInGame(document.getElementById('player-name').value);
        var corolla = document.getElementById('vehicle-1');
        var cruiser = document.getElementById('vehicle-2');
        if (corolla.checked) {
            this.model.storeVehicle('Toyota Corolla');
            this.model.set('energyConsump', 1);
            this.model.set('minEnergy', 20);
//            this.model.set('totalScore', 16);
        }
        if (cruiser.checked) {
            this.model.storeVehicle('Toyota Land Cruiser');
            this.model.set('energyConsump', 3);
            this.model.set('minEnergy', 0);
//            this.model.set('totalScore', 24);
        }
        window.location.href = 'file:///Users/dtranrules/Desktop/dailyhw/day32/public/index.html?car=on#/play';
    },// end function
});