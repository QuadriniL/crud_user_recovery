const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async store(req,res) {
        const { name, email, pass } = req.body;
        
        var password = await bcrypt.hash(pass, 8);

        const user =  await User.create({
            name, email, password
        });        

        return res.json(user);
    },

    async update (req,res) {
        
        const HeaderToken = req.params;

        const parts = HeaderToken.split(' ');

        const [ schema, token ] = parts;

         jwt.verify(token, 'senhaaleartoriaquedeveriapassarporumjsonsecret', (err,decode) =>{
             if(err) return res.status(403).send('block');

            req.userId = decode.id;
         })

        const user = await User.findById({ id: req.userId });

        const { pass } = req.body;

        user.password = pass;

        await user.save();
         
        return res.json(user);
        
         

    }


}