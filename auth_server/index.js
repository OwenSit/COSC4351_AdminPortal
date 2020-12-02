const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const {mogoUri} = require('./keys')

require('./models/Account');
require('./models/Admin');
require('./models/Finance');
require('./models/Hr');
require('./models/Sales');
require('./models/Technology');

const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(mogoUri,{
    useNewUrlParser:true,    
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected!!!");
})
mongoose.connection.on("error",(err)=>{
    console.log("Error!!! ",err);
})

app.get('/',requireToken,(req,res)=>{
    res.send({username:req.account.username})
})
app.listen(PORT,()=>{
    console.log('server running '+PORT);
})