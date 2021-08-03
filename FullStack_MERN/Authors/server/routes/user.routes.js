

const AuthoreController = require('../controllers/user.controller');
module.exports = function(app){
    app.post('/api/new', AuthoreController.createAuthor);
    app.get('/api/Author',AuthoreController.getAllAuthore)
    app.get('/api/Author/:id', AuthoreController.getAuthor);
    app.put('/api/Author/:id', AuthoreController.updateAuthor);
    app.delete('/api/Author/delete/:id', AuthoreController.deleteAuthor);



}
