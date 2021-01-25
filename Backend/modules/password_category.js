const mongoose = require('mongoose');
var dotenv = require('dotenv');
require('dotenv').config()

var dburl="mongodb+srv://Rizwan:karachi12345@pms-h1aco.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dburl, {useNewUrlParser: true, useCreateIndex: true});
var conn =mongoose.Collection;
var passcatSchema =new mongoose.Schema({
    password_category_name: {type:String, 
        required: true,
    date:{
        type: Date, 
        default: Date.now }
}});

var passCateModel = mongoose.model('password_categories', passcatSchema);
module.exports=passCateModel;