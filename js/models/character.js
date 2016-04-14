// Model for a game character
module.exports = Backbone.Model.extend({
    defaults: {
        name: 'Anonymous', // create a property of the model called 'anonymous'
        x: 0,
        y: 0,
        vehicle: 'Toyota Avalon',
        energy: 102,
        energyConsump: 1,
        xEnergy: 1,
        yEnergy: 1,
        podsCollected: 0,
    },
    storeInGame: function(name) {
//        var playaz = this.get('numPlayers'); // array specific
//        playaz.push(name); // array specific
        this.set('name', name);
//        this.trigger('change', this); // array specific
    },
    storeVehicle: function(vehicle) {
        this.set('vehicle', vehicle);
    },
    energyLoss: function() {
        if (this.get('energy') >= 1) {
            this.set('energy', this.get('energy') - this.get('energyConsump'));
        }
    },
    validate: function(attributes) {
            if (attributes.y > 10 || attributes.y < 0) {
                // nope, can't do it
                return 'you\'re going too far! turn back!';
            }
            if (attributes.x > 10 || attributes.x < 0) {
                return 'you\'re going too far! turn back!';
            }
    },
    up: function() {
        // change position by 1
        var newPosition = this.get('y') + 1;
        this.set('y', newPosition, {
            validate: true,
        });
    },
    down: function() {
        // change position by 1
        var newPosition = this.get('y') - 1;
        this.set('y', newPosition, {
            validate: true,
        });
    },
    right: function() {
        // change position by 1
        var newPosition = this.get('x') + 1;
        this.set('x', newPosition, {
            validate: true,
        });
    },
    left: function() {
        // change position by 1
        var newPosition = this.get('x') - 1;
        this.set('x', newPosition, {
            validate: true,
        });
    },
    randomEnergy: function () {
        this.set('xEnergy', Math.round(Math.random() * 10));
        this.set('yEnergy', Math.round(Math.random() * 10));
        if (this.get('energy') <= 80) {
            this.set('energy', this.get('energy') + 20);
        } else if (this.get('energy') <= 90) {
            this.set('energy', this.get('energy') + 10);
        } else {
            this.set('energy', this.get('energy') + 5);
        }
    },
    randomPosition: function () {
        this.set('x', Math.round(Math.random() * 10));
        this.set('y', Math.round(Math.random() * 10));
    },
});