const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', function (req, res) {
 res.send("hey from usersRouter");   
})

router.post('/register', function(req,res){
    try{

        let {email, password, fullname} = req.body;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt,async function(err, hash) {
                if(err){res.send(err.message);}
                else{
                      let createdUser = await userModel.create({
            email,
            password : hash, 
            fullname,
        });
        res.status(200).send(createdUser);
                }
            });
        });


      
    }catch(err){
        res.status(400).send(err.message);
    }
})

module.exports = router;