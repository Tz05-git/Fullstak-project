require("dotenv").config()
const express=require("express")
const cors=require("cors")

const corsOption= require("./config/corsOption")
const connDB=require("./config/connDB")
const mongoose=require("mongoose")
const PORT= process.env.PORT || 2025
const app =express()

connDB()
app.use(cors(corsOption))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/product", require("./rout/productrout"))
app.use("/api/user", require("./rout/userRout"))
app.use("/api/basket",require("./rout/roterBsket"))

app.get('/',(req,res)=>{
    res.send("home page")
})


mongoose.connection.once('open',()=>{
    console.log("connect to db success");
    app.listen(PORT, ()=>{
        console.log(`server runing on port ${PORT}`);
        
    })
})
mongoose.connection.on('error',(err)=>{
    console.log("****db error****");
    console.log(err);
})