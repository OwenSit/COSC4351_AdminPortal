const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    rolename:{
        type:String,
        required:true
    },
    links:{
        type:String,
        required:true
    }
})

mongoose.model('Admin',adminSchema);