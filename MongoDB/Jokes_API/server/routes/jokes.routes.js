const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneSingleJoke);
    app.patch('/api/jokes/:id', JokesController.updateExistingJoke);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJoke);
}
