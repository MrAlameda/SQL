import { Express } from "express"
import { Metabase } from "../model"
const exprees=require("express")

const router:Express=exprees.Router()

const metabase:Metabase[]=[
    {
        hobbie_1:"aprender ingles",
        hobbie_2:"aprender postgresql",
        hobbie_3:"aprender ubuntu server"
    }
]


router.post("/",(_req,res)=>{
    const body=_req.body

    metabase.push({
        "hobbie_1":body.hobbie_1,
        "hobbie_2":body.hobbie_2,
        "hobbie_3":body.hobbie_3
    })

    res.status(200).json(metabase)
})

router.get("/",(_req,res)=>{
    res.status(200).json(metabase)
})

module.exports=router