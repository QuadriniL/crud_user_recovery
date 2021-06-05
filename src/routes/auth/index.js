const Express = require('express');
const SessionController = require('../../controllers/SessionController');
const User = require('../../models/user');


const jwt = require('jsonwebtoken');
const { findOne } = require('../../models/user');


const Router = Express.Router();

Router.post('/sessions', SessionController.store);
/*
email: ""
password: ""
*/

// email: ""
Router.get('/forgot', (req,res) => {
    //configurei aqui por que só uso nessa parte, pra achar mais facil
    /*const transport = nodemailer.createTransport({
        host: "", //stpm
        port: ,
        auth: {
            "", // usuario
            "" // senha
        }
    });*/
    
    const { email } = req.body;

    const user = findOne({ email });
    
    const token = jwt.sign({
        id: user.id
    }, 'senhaaleartoriaquedeveriapassarporumjsonsecret', {
        expiresIn: 80000,
    });



    transport.sendMail({
        from: "aplicacao@email.com",
        to: email,
        subject: ``,
        text: `http://localhost:3333/resetpass/${token}`,
    }).then(data => {
        console.log(data);
    }).catch(err => {
        res.send(err)
    });



})


module.exports = Router;