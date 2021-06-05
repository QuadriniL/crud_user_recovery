const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async store(req,res) {
        const { email, pass } = req.body;

        const user = (await User.findOne({ email }));

        if(!user){
            return res.status(403);
        }
        if(!await bcrypt.compare(pass, user.password))
        {
            return res.status(403).json({message: "none"});
        } 
        
        const token = jwt.sign({
            id: user.id
        }, 'senhaaleartoriaquedeveriapassarporumjsonsecret', {
            expiresIn: 80000,
        });
        
        return res.json({user, token});
        

        
    }
}