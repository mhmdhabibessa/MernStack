

const PersonController = require('../controllers/user.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people',PersonController.getAllpeople)
    app.get('/api/people/:id', PersonController.getPerson);
    app.put('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);



}
