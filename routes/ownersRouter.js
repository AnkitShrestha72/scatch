const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV === 'development') { 
    // console.log("development mode");
    router.post('/create',async function (req, res) {
       let owners = await ownerModel.find();
       if(owners.length > 0){
        return res
        .send(500)
        .send("Owners already exist");
       }
       let {fullname, email, password} = req.body;
       let createdOwner = await ownerModel.create(
        {
            fullname,
            email,
            password,
        }
       );
       res.status(200).send(createdOwner);
    });

}
router.get('/', function (req, res) {
 res.send("hey from ownerRouter");   
})

// console.log(process.env.NODE_ENV);

module.exports = router;