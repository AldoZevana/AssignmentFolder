const PlayerController = require('../controllers/player.controllers');

module.exports = (app) => {
    app.get('/api/players/list', PlayerController.findAllPlayers);
    app.get('/api/players/list/:id', PlayerController.findOnePlayer);
    app.post('/api/players/addplayer', PlayerController.createPlayer);
    app.delete('/api/players/list/:id', PlayerController.deletePlayer);
    app.put('/api/players/edit/:id', PlayerController.updateStatus);
};