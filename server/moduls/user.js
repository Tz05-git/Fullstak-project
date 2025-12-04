const { type } = require("express/lib/response")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username:{
        type:String,
        unique:true ,
        lowercase:true,
        trin:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
         type:String,
        required:true 

    },
    email:{
        type:String,
        trim:true
    },
   phone:{
   type:String
   },
   roles:{
     type:String,
     enum:['User','Admin'],
     default:"User"
   },
   activ:{
    type:Boolean,
    default:true
   },

},
{timestamps:true}

)

module.exports= mongoose.model("user",userSchema)