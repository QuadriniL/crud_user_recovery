const Sequelize = require('sequelize');
const sqlConfig = require('../config/sequelize');

const User = require('../models/user');

const connection = new Sequelize(sqlConfig);

User.init(connection); 

module.exports = connection;