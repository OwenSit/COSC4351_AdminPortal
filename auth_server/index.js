const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const {mogoUri} = require('./keys')

require('./models/Admin');

const authRoutes = require('./routes/authRoutes')
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(mogoUri,{
    useNewUrlParser:true,    
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected!!!")
})

mongoose.connection.on("error",(err)=>{
    console.log("Error!!! ",err)
})



app.listen(PORT,()=>{
    console.log('server running '+PORT)
})