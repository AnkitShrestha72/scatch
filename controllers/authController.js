const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');


module.exports.registerUser = async function(req,res){
    try{

        let {email, password, fullname} = req.body;

        let user = await userModel.findOne({ email: email});
        if (user)  return res.status(400).send("User already exists");
    
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt,async function(err, hash) {
                if(err){res.send(err.message);}
                else{
                      let createdUser = await userModel.create({
            email,
            password : hash, 
            fullname,
        });
        let token = generateToken(createdUser);
        res.cookie('token', createdUser);

        
        res.status(200).send(createdUser);
                }
            });
        });


      
    }catch(err){
        res.status(400).send(err.message);
    }
}

module.exports.loginUser = async function(req,res){
 
    let {email, password} = req.body;
    let user = await userModel.findOne({ email: email});
 

    if(!user) return res.status(404).send("Email or Password Invalid");
    

    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            res.send("Login Successfull")
        }
        else {
            res.status(404).send("Email or Password Invalid");
        }
    }
)
};