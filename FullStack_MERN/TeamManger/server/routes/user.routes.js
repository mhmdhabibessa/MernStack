

const PlayerController = require('../controllers/user.controller');
module.exports = function(app){
    app.post('/api/new', PlayerController.createPlayer);
    app.get('/api/players',PlayerController.getAllPlayer)
    app.get('/api/Player/:id', PlayerController.getPlayer);
    app.delete('/api/players/delete/:id',PlayerController.deletePlayer);



}
