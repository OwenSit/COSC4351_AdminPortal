const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    linkname:{
        type:String,
        required:true
    }
})

mongoose.model('Sales',salesSchema);