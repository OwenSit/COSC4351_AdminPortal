const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Admin = mongoose.model('Admin');

router.post('/signup',async(req,res)=>{
    console.log(req.body)

    const {username,password,role} = req.body

    try{
        const admin = new Admin({username,password,role});
        await admin.save();
        res.send('create succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

module.exports = router