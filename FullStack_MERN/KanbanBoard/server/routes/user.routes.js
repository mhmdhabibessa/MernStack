

const ProjectController = require('../controllers/user.controller');
module.exports = function(app){
    app.post('/api/new', ProjectController.createProject);
    app.get('/api/projects/:status',ProjectController.getprojectsBystatus);
    app.get('/api/project/:id', ProjectController.getProject);
    app.put('/api/project/:id', ProjectController.updateProject);
    app.delete('/api/project/delete/:id', ProjectController.deleteProject);



}
