const User = require("../moduls/user")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")

const register = async (req,res)=>{
const {username, password,name,email,phone,roles}=req.body
 if(! name || !username ||! password){
    return res.status(400).json({message:"All fields are required"})
 }
if(roles&&!(roles==="Admin"||roles==="User")){
  return res.status(400).json({message:"error rolse"})
}

 const duplicate = await User.findOne({username:username})
if(duplicate){
     return res.status(409).json({message:"Duplicate username"})
}
 const hashedpwd = await bcrypt.hash(password,10)
  const userObject = { roles,name,email, username, phone, password:hashedpwd}
 
  const user = await User.create(userObject)
  if(user){
    return res.status(201).json({massage:`new user${user.username} created`})
  }
else{
      return res.status(201).json({massage:"Invalid user received"})
}

}

const login = async (req, res)=>{
  const {username, password} =req.body
  if(!username ||!password){
      return res.status(400).json({message:'All fields are required'})
  }
  const foundUser = await User.findOne({username}).lean()
  if(!foundUser||!foundUser.activ)
    return res.status(401).json({message: 'Unauthorized' })
  const match = await bcrypt.compare(password,foundUser.password)
  if(!match)
  {
    return res.status(401).json({message:'Unauthorized'})
  }
 const useInfo = {_id:foundUser._id, name:foundUser.name, 
  username:foundUser. username,email:foundUser.email, phone:foundUser.phone,roles:foundUser.roles}

  const accessToken = jwt.sign(useInfo,process.env.ACCESS_TOKEN_SECRET)
  
  res.json({accessToken:accessToken})


}

module.exports={login ,register}