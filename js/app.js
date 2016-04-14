window.addEventListener('load', function () {
    var GameRouter = require('./router');
    var Character = require('./models/character');
    
    var router = new GameRouter();
    Backbone.history.start();
    
});