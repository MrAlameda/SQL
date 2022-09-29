import { Express } from "express"
const exprees=require("express")

const router:Express=exprees.Router()

router.get('/',(_req,res)=>{
    res.status(200).send("Mario Alameda,22,Mexico")
})

module.exports=router