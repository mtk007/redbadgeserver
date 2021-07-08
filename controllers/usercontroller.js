const Express = require('express');
const UsersModel = require('../models/users');
const router = Express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UniqueConstraintError } = require('sequelize/lib/errors');
const middleware = require('../middleware');


router.post("/register", async (req, res) => {

    const {email, password, role} = req.body.user;
   
    try{
        const User = await UsersModel.create({
            email,
            password: bcrypt.hashSync(password, 15),
            role
        });


    const token = jwt.sign({ id: User.id, role: User.admin }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 168}) //change 168 back to 24 
        

        res.status(201).json({
            message: "Successfully registered probie",
            user: User,
            role,
            sessionToken: token
        });
    } catch (err){
        if(err instanceof UniqueConstraintError){
            res.status(409).json({
                message: "This email is already in use!"
            });
        } else{
            res.status(500).json({
                message: `Failed to register ZEE user ${err}`
            
            });
        }
    }
});

router.post("/login", async (req, res) => {
    let {email, password, role} = req.body.user;

    try{
         const User = await UsersModel.findOne({  
            where: {
                email: email,
                role: role 
            },
        })
        if(User){
            let comparePasswords = await bcrypt.compare(password, User.password);

            if(comparePasswords){

                let token = jwt.sign({id: User.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 168}); 

            res.status(200).json({
                user: User,
                message: "Successfully logged in!",
                sessionToken: token
            })

        } else{
            res.status(401).json({
                message: "Incorrect email or password"
            })
        }} else{
            res.status(401).json({
                message: "Incorrect email or password"
            })
        }
    } catch(err){
        res.status(500).json({
            message: `Failed to log in ${err}` 
        })
    }
});


router.delete("/delete/:id", middleware.validateSession, async(req, res) => {

    //const {email, password, role} = req.body.user;
   
    try{
                    //why doesn't await go here
        const User = await UsersModel.destroy({
            where: {id: req.params.id}
            // email,
            // password: bcrypt.hashSync(password, 15),
            // role
        });


    const token = jwt.sign({ id: User.id, role: User.admin }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 168}) //change 168 back to 24 
        

        res.status(201).json({
            message: "Successfully deleted user",
            user: User,
            //role,
            sessionToken: token
        });
    } catch (err){
        if(err instanceof UniqueConstraintError){
            res.status(409).json({
                message: "This user cannot be deleted!"
            });
        } else{
            res.status(500).json({
                message: `Failed to delete user ${err}`
            
            });
        }
    }
});


module.exports = router; 