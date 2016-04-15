// New character view: shows a form to create a new character
module.exports = Backbone.View.extend({

    template: _.template(document.getElementById('end-game-template').textContent),
    render: function() {
        var playaz = this.model.get('name');
        var podsCollected = this.model.get('podsCollected');
        var totalScore = this.model.get('totalScore');
        var html = this.template({
            name: playaz,
            podsCollected: podsCollected,
            totalScore: totalScore,
        });
        this.el.innerHTML = html;
    },
});