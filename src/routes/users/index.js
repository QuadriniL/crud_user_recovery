const Express = require('express');
const UserController = require('../../controllers/UserController');

const Router = Express.Router();

Router.post('/users', UserController.store);
Router.post('/resetpass/:token', UserController.update);



module.exports = Router;