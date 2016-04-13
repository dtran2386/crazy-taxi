module.exports = Backbone.View.extend({
    initialize: function() {
        this.model.on('change', this.render, this);
        console.log('listening for change event');
    },
    events: {
        'click #click-up': 'clickUp', // when button is clicked, update model with names
        'click #click-down': 'clickDown',
        'click #click-left': 'clickLeft',
        'click #click-right': 'clickRight',
    },
    template: _.template(document.getElementById('play-game-template').textContent),
    render: function() {
        console.log('info changed');
//        this.el.innerHTML = this.model.get('currentPositions');
        var content = [];
        
        var playaz = this.model.get('numPlayers');
        for (var i = 0; i < playaz.length; i++) {
            var html = this.template({
                name: playaz[i].name,
                position: playaz[i].position,
            });
//            console.log(html);
            content.push(html);
        }
        
//        console.log(content.join(''));
        this.el.innerHTML = content.join('');
    },
    clickUp: function () {
        console.log('clicked up');
        this.model.up();
//        this.model.storePositions({
//            y: document.getElementById('click-up').value,
//        });
    },
    clickDown: function () {
        console.log('clicked down');
        this.model.down();
//        this.model.storePositions({
//            y: document.getElementById('click-down').value,
//        });
    },
    clickLeft: function () {
        console.log('clicked left');
        this.model.left();
//        this.model.storePositions({
//            x: document.getElementById('click-left').value,
//        });
    },
    clickRight: function () {
        console.log('clicked right');
        this.model.right();
//        this.model.storePositions({
//            x: document.getElementById('click-right').value,
//        });
    },
});