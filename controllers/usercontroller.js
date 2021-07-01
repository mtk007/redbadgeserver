const Express = require('express');
const { UsersModel } = require('../models');
const router = Express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UniqueConstraintError } = require('sequelize/lib/errors');


router.post("/register", async (req, res) => {

    const {email, password, role} = req.body.user;
   
    

    try{
        const User = await UsersModel.create({
            email: email,
            password: bcrypt.hashSync(password, 15),
            role: role
        });


        let token = jwt.sign({id: User.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 168}) //change 168 back to 24 
        

        res.status(201).json({
            message: "Successfully registered probie",
            user: User,
            role,
            //sessionToken: token
        });
    } catch (err){
        if(err instanceof UniqueConstraintError){
            res.status(409).json({
                message: "This email is already in use!"
            });
        } else{
            res.status(500).json({
                message: "Failed to register the user"
            
            });
        }
    }
});
module.exports = router; 