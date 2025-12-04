const mongoose= require("mongoose")

const connDB = async () =>{
    try{
        await mongoose.connect(process.env.DATADB_URI)
    }
catch(ex){
      console.log("Connection to db fail"+ ex.massage);
}


}
module.exports=connDB