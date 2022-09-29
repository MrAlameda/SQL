import { Express } from "express"
import { Businessbase } from "../model"

const exprees=require("express")

const router:Express=exprees.Router()


const businessbase:Businessbase[]=[
    {
        business_1:"google",
        business_2:"Red Hat",
        business_3:"meta"
    }
]


router.post("/",(_req,res)=>{
    const body=_req.body

    businessbase.push({
        "business_1":body.business_1,
        "business_2":body.business_2,
        "business_3":body.business_3
    })

    res.status(200).json(businessbase)
})

router.get("/",(_req,res)=>{
    res.status(200).json(businessbase)
})


router.get("/",(_req,res)=>{
    res.status(200).send("business?")
})

module.exports=router