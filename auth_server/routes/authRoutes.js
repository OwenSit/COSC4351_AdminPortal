const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Account = mongoose.model('Account');
const Admin = mongoose.model('Admin');
const Finance = mongoose.model('Finance');
const Hr = mongoose.model('Hr');
const Sales = mongoose.model('Sales');
const Technology = mongoose.model('Technology');

router.post('/signup',async(req,res)=>{
    console.log(req.body)

    const {username,password,role} = req.body

    try{
        const account = new Account({username,password,role});
        await account.save();
        res.send('create new account succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/admin',async(req,res)=>{
    console.log(req.body)

    const {linkname} = req.body

    try{
        const admin = new Admin({linkname});
        await admin.save();
        res.send('create Admin links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/finance',async(req,res)=>{
    console.log(req.body)

    const {linkname} = req.body

    try{
        const finance = new Finance({linkname});
        await finance.save();
        res.send('create Finance links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/hr',async(req,res)=>{
    console.log(req.body)

    const {linkname} = req.body

    try{
        const hr = new Hr({linkname});
        await hr.save();
        res.send('create Hr links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/sales',async(req,res)=>{
    console.log(req.body)

    const {linkname} = req.body

    try{
        const sales = new Sales({linkname});
        await sales.save();
        res.send('create Sales links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/technology',async(req,res)=>{
    console.log(req.body)

    const {linkname} = req.body

    try{
        const technology = new Technology({linkname});
        await technology.save();
        res.send('create Technology links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

module.exports = router