const Express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes');

const api = Express();

api.use(bodyParser.json());
api.use(Routes);



api.listen(3333);