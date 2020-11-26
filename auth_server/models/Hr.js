const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
    linkname:{
        type:String,
        required:true
    }
})

mongoose.model('Hr',hrSchema);