// Model for a game character
module.exports = Backbone.Model.extend({
    defaults: {
        name: 'Anonymous', // create a property of the model called 'anonymous'
//        position: 0,
        x: 0,
        y: 0,
        currentPosition: [],
        numPlayers: [],
    },
    storeInGame: function(name) {
        var playaz = this.get('numPlayers');
        playaz.push(name);
        this.set('numPlayers', playaz);
        this.trigger('change', this);
        
        console.log('Model has ' + playaz.length + ' players');
        console.log(playaz);
    },
    storePositions: function(x,y) {
        var pos = this.get('currentPosition');
        pos.push(x,y);
        this.set('currentPosition', pos);
        this.trigger('change', this);
        
        console.log('Player is in positon: ' + pos);
    },
    validate: function(attributes) {
        console.log(attributes);
        if (attributes.y >= 10 | attributes.y <= 0) {
            y = 10;
            return 'you\'re going too far! turn back!';
        } else if (attributes.y <= 0) {
            y = 0;
        }
        if (attributes.x >= 10) {
            x = 10;
            return 'you\'re going too far! turn back!';
        } else if (attributes.x <= 0) {
            x = 0;
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
    left: function() {
        // change position by 1
        var newPosition = this.get('x') - 1;
        this.set('x', newPosition, {
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
});