import { Express } from "express"
import { Users } from "../model"
import { createUser, getAllUsers, getUserById } from "./users.controllers"


const exprees=require("express")

const router:Express=exprees.Router()



router.get("/",(_req,res)=>{
    const data=getAllUsers()
    res.status(200).json(data)
})
    
router.post("/",(req,_res)=>{
    const info:Users = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password,
        birthday:req.body.birthday
    }

    if(info){
        const data=createUser(info)
        _res.status(201).json(data)
    }else{
        _res.status(400).json({msagge:"no acepted value"})
    }
})

router.get("/:id",(_req,res)=>{
    const data=getUserById(_req.params.id)
    if(data){
        res.status(200).json(data) 
    }else{
        res.status(400).json({mesagge:"this user not exist"})
    }
})

module.exports=router