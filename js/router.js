var NewCharacterView = require('./views/new-character');
var PlayView = require('./views/play');
var CharacterModel = require('./models/character');

module.exports = Backbone.Router.extend({
    // things to happen once at the beginning
    initialize: function() {
        this.gameCharacter = new CharacterModel();
        this.activeView = null;
    },
    routes: {
        'new': 'newGame',
        'play': 'playGame',
    },
    // when someone visits http://.....#/new
    newGame: function() {
        console.log('new game');
        
        if (this.activeView !== null) {
            this.activeView.el.innerHTML = '';
            this.activeView.undelegateEvents();
        }
        
        this.activeView = new NewCharacterView({
            model: this.gameCharacter,
            el: document.getElementById('new-player-section'),
        });
        this.activeView.render();
    },
    // when someone visits http://.....#/play
    playGame: function() {
        console.log('play game');
        
        if (this.activeView !== null) {
            this.activeView.el.innerHTML = '';
            this.activeView.undelegateEvents();
        }
        
        this.activeView = new PlayView({
            model: this.gameCharacter,
            el: document.getElementById('play-game-section'),
        });
        this.activeView.render();
    },
});