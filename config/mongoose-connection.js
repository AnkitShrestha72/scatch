const mongoose = require('mongoose');

mongoose
.connect("mongodb://127.0.0.1:27017/scatch")
.then(function(){
    console.log("connected to Database");
})
.catch(function(err){
   console.log( err + " Connection Error");
})


module.exports = mongoose.connection;