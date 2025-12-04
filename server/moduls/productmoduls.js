const { type } = require("express/lib/response");
const  mongoose  = require("mongoose");

const productSchema= new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        price: {
            type :Number,
            required:true,
            min:0
        },
        catgory:{
            type:String
        },
       image:{
         type:String,
         trim:true
       },
     
        count:{
            type:Number,
            min:0,
           
        },
    },
    {
            timestamps:true
    })
module.exports=mongoose.model('productmoduls',productSchema)