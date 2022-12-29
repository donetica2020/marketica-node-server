const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orgSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mission:{type:String,required:true},
    address:{type:String,required:true},
    country:{type:String,required:true},
    continent:{type:String,required:true},
    website:{type:String,required:true},
    donationurl:{type:String,required:true},
    language:{type:String,required:true},

},{timestamps:true});

const Organization = mongoose.model('pendingorganization',orgSchema)


module.exports = Organization;