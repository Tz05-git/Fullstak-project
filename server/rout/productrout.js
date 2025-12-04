const express = require("express")
const router= express.Router()
const conproduct=require("../controllers/conproduct")
// const verifyJWT=require("../midelwer/verifyJWT")
const product=require("../moduls/productmoduls")

router.get("/" ,conproduct.getAll)
router.post("/" ,conproduct.creatproduct)
router.delete("/:id" ,conproduct.deletep)
router.put("/",conproduct.updatep)

module.exports= router