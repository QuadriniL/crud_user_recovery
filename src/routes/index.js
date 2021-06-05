const Express = require('express');
const Users = require('./users');
const Sessions = require('./auth');

require('../database');

const Routes = Express.Router();

Routes.use(Users);
Routes.use(Sessions);

module.exports = Routes;