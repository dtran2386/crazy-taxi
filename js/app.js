window.addEventListener('load', function () {
    var GameRouter = require('./router');
    var Character = require('./models/character');
    
    var router = new GameRouter();
    Backbone.history.start();
    
//    var char = new Character();
//    char.set('x', 5);
//    char.set('y', 5);
});