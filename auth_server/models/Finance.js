const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    rolename:{
        type:String,
        required:true
    },
    links:{
        type:String,
        required:true
    }
})

mongoose.model('Finance',financeSchema);