import { Express } from "express"
import { createTodo, getAllTodos, getTodoById } from "./todo.controller"


const exprees=require("express")

const router:Express=exprees.Router()



router.get("/",(_req,res)=>{
    const data=getAllTodos()
    res.status(200).json(data)
})
    
router.post("/",(req,_res)=>{
    const { name } = req.body

    if(name){
        const data=createTodo(name)
        _res.status(201).json(data)
    }else{
        _res.status(400).json({msagge:"no acepted value"})
    }
})

router.get("/:id",(_req,res)=>{
    const data=getTodoById(_req.params.id)
    if(data){
        res.status(200).json(data) 
    }else{
        res.status(400).json({mesagge:"id not found"})
    }
})

module.exports=router