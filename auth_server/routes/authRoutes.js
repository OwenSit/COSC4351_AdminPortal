const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Admin = mongoose.model('Admin');

router.post('/signup',(req,res)=>{
    console.log(req.body)

    const {username,password} = req.body
    const admin = new Admin({username,password});
    admin.save();

    res.send('hello')
})

module.exports = router