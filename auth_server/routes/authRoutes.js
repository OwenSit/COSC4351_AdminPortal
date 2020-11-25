const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Account = mongoose.model('Account');
const Admin = mongoose.model('Admin');
const Finance = mongoose.model('Finance');
const Hr = mongoose.model('Hr');
const Sales = mongoose.model('Sales');
const Support = mongoose.model('Support');
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

    const {rolename,links} = req.body

    try{
        const admin = new Admin({rolename,links});
        await admin.save();
        res.send('create Admin links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/finance',async(req,res)=>{
    console.log(req.body)

    const {rolename,links} = req.body

    try{
        const finance = new Finance({rolename,links});
        await finance.save();
        res.send('create Finance links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/hr',async(req,res)=>{
    console.log(req.body)

    const {rolename,links} = req.body

    try{
        const hr = new Hr({rolename,links});
        await hr.save();
        res.send('create Hr links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/sales',async(req,res)=>{
    console.log(req.body)

    const {rolename,links} = req.body

    try{
        const sales = new Sales({rolename,links});
        await sales.save();
        res.send('create Sales links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/support',async(req,res)=>{
    console.log(req.body)

    const {rolename,links} = req.body

    try{
        const support = new Support({rolename,links});
        await support.save();
        res.send('create Support links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

router.post('/technology',async(req,res)=>{
    console.log(req.body)

    const {rolename,links} = req.body

    try{
        const technology = new Technology({rolename,links});
        await technology.save();
        res.send('create Technology links succeed')
    }catch(err){
        res.status(422).send(err.message)
    }   
})

module.exports = router