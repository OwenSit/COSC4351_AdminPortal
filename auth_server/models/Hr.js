const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
    rolename:{
        type:String,
        required:true
    },
    links:{
        type:String,
        required:true
    }
})

mongoose.model('Hr',hrSchema);