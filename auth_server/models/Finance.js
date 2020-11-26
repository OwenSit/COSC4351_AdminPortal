const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    linkname:{
        type:String,
        required:true
    }
})

mongoose.model('Finance',financeSchema);