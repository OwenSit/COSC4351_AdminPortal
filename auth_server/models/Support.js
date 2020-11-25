const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
    rolename:{
        type:String,
        required:true
    },
    links:{
        type:String,
        required:true
    }
})

mongoose.model('Support',supportSchema);