const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    linkname:{
        type:String,
        required:true
    }
})

mongoose.model('Admin',adminSchema);