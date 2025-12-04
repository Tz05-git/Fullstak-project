const express = require("express")
const router =express.Router()
const bascontroller= require("../controllers/basketcontroller")
const { route } = require("./userRout")
const verifyJWT=require("../midelwer/verifyJWT")

router.get("/",verifyJWT,bascontroller.getAll)
router.post("/",verifyJWT,bascontroller.add)
router.put("/",verifyJWT,bascontroller.upbasket)
router.delete("/:productId",verifyJWT,bascontroller.deletitems)

module.exports= router
       