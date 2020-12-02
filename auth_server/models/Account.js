const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const accountSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

accountSchema.pre('save',function(next){
    const account = this;
    if(!account.isModified('password')){
        return next();
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err);
        }
     bcrypt.hash(account.password,salt,(err,hash)=>{
         if(err){
             return next(err);
         }
         account.password = hash;
         next();
     })

    })

})

accountSchema.methods.comparePassword = function(candidatePassword){
    const account = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,account.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })
}

mongoose.model('Account',accountSchema);