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
        this.model.storeInGame({
            name: document.getElementById('player-name').value,
        });
//        var name = document.getElementById('player-name').value;
//        console.log('new name: ' + name);
//        this.model.set('name', name);
    }
});