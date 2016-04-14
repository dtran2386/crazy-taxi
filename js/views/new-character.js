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
//            if (this.model.get('energy') < 4) {
//                alert('Your energy levels are too low! You lose the game.');
//            } // won't work here, i don't think
        }
        if (cruiser.checked) {
            this.model.storeVehicle('Toyota Land Cruiser');
            this.model.set('energyConsump', 3);
        }
        
//        this.model.storeInGame2({
//            vehicle: document.getElementById('vehicle-2').value,
//        });
//        var name = document.getElementById('player-name').value;
//        console.log('new name: ' + name);
//        this.model.set('name', name);
    }
});