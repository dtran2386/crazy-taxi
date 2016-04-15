// AS = array specific syntax
module.exports = Backbone.View.extend({
    initialize: function() {
        this.model.on('change', this.render, this);
        var that = this;
        Mousetrap.bind('right', function() {
            that.clickRight();
        });
        Mousetrap.bind('left', function() {
            that.clickLeft();
        });
        Mousetrap.bind('up', function() {
            that.clickUp();
        });
        Mousetrap.bind('down', function() {
            that.clickDown();
        });
    },
    events: {
        'click #click-right': 'clickRight',
        'click #click-left': 'clickLeft',
        'click #click-up': 'clickUp',
        'click #click-down': 'clickDown',
    },
    template: _.template(document.getElementById('play-game-template').textContent),
    render: function() {

        if (this.model.get('energy') < this.model.get('minEnergy')) {
            alert('Game Over!');
            window.location.href = 'file:///Users/dtranrules/Desktop/dailyhw/day32/public/index.html?car=on#/end';
        }
        if (this.model.get('x') === this.model.get('xEnergy') && this.model.get('y') === this.model.get('yEnergy'))         {
            this.model.randomEnergy();
            alert('You picked up a random stranger. Congratulations.');
            this.model.set('podsCollected', this.model.get('podsCollected') + 1);
            this.model.set('totalScore', this.model.get('totalScore') + 29);
        }
        var playaz = this.model.get('name');
        var x = this.model.get('x');
        var y = this.model.get('y');
        var car = this.model.get('vehicle');
        var ener = this.model.get('energy');
        var xEnergy = this.model.get('xEnergy');
        var yEnergy = this.model.get('yEnergy');
        var podsCollected = this.model.get('podsCollected');
        var totalScore = this.model.get('totalScore');
        this.el.innerHTML = this.template({
            name: playaz,
            x: x,
            y: y,
            vehicle: car,
            energy: ener,
            xEnergy: xEnergy,
            yEnergy: yEnergy,
            podsCollected: podsCollected,
            totalScore: totalScore,
        });
        var grid = document.getElementById('cell-grid');
        for (var y = 0; y < 10; y++) {
          for (var x = 0; x < 10; x++) {
              var div = document.createElement('div');
//              div.setAttribute('id', 'cell-' + x + '-' + y);
              div.classList.add('cells');
              
              // is the current cell an energy pod?
              if (x === this.model.get('xEnergy') && y === this.model.get('yEnergy')) {
                div.classList.add('energy-pod');
              }
              if (x === this.model.get('x') && y === this.model.get('y')) {
                div.classList.add('movement');
              }
              grid.appendChild(div);
          }; // end inner for loop
        };// end outer for loop

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
});