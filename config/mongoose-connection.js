const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("connected to Database");
})
.catch(function(err){
    dbgr( err + " Connection Error");
})


module.exports = mongoose.connection;