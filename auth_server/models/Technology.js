const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
    rolename:{
        type:String,
        required:true
    },
    links:{
        type:String,
        required:true
    }
})

mongoose.model('Technology',technologySchema);