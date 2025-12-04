const { type } = require("express/lib/response")
const mongoose=require("mongoose")

const basketSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    },
items:[{
 productId:{type:mongoose.Schema.Types.ObjectId, ref:'product'},
 quantity:{type:Number,default:1}

}]

},
{timestamps:true}

);
module.exports= mongoose.model("basket",basketSchema)