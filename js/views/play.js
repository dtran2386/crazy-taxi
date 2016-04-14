// AS = array specific syntax
module.exports = Backbone.View.extend({
    initialize: function() {
//        this.model.randomPosition(); // why won't this work while randomEnergy() is also invoked at the same time?
        this.model.on('change', this.render, this);
//        console.log('listening for change event');
    },
    events: {
        'click #click-up': 'clickUp',
        'click #click-down': 'clickDown',
        'click #click-right': 'clickRight',
        'click #click-left': 'clickLeft',
    },
    template: _.template(document.getElementById('play-game-template').textContent),
    render: function() {
//        console.log('info changed');
//        this.el.innerHTML = this.model.get('currentPositions'); //AS
//        var content = []; //AS
        
        var playaz = this.model.get('name');
//        for (var i = 0; i < playaz.length; i++) { //AS
//            var html = this.template({
//                name: playaz[i].name,
//                position: playaz[i].position,
//            });
////            console.log(html);
//            content.push(html); //AS
//        }
        
//        console.log(content.join(''));
        var x = this.model.get('x');
        var y = this.model.get('y');
        var car = this.model.get('vehicle');
        var ener = this.model.get('energy');
        var xEnergy = this.model.get('xEnergy');
        var yEnergy = this.model.get('yEnergy');
        var podsCollected = this.model.get('podsCollected');
        this.el.innerHTML = this.template({
            name: playaz,
            x: x,
            y: y,
            vehicle: car,
            energy: ener,
            xEnergy: xEnergy,
            yEnergy: yEnergy,
            podsCollected: podsCollected,
        });
        if (this.model.get('energy') < 1) {
            prompt('Game Over! Would you play this game again?');
            alert('Aiite Aiite I c u');
        }
        if (this.model.get('x') === this.model.get('xEnergy') && this.model.get('y') === this.model.get('yEnergy')) {
            this.model.randomEnergy();
            alert('got em!');
            this.model.set('podsCollected', this.model.get('podsCollected') + 1);
        }
    },
    clickUp: function () {
        console.log('clicked up');
        this.model.up();
        this.model.energyLoss();
    },
    clickDown: function () {
        console.log('clicked down');
        this.model.down();
        this.model.energyLoss();
    },
    clickRight: function () {
        console.log('clicked right');
        this.model.right();
        this.model.energyLoss();
    },
    clickLeft: function () {
        console.log('clicked left');
        this.model.left();
        this.model.energyLoss();
    },
});