import { Express } from "express"
const express=require("express")
const app:Express=express()

// routes
const me = require("./routes/me")
const metas=require("./routes/metas")
const business=require("./routes/business")


//! middleware
app.use(express.json())

app.use("/me",me)
app.use("/metas",metas)
app.use("/business",business)

const database=[
    {
        "id":"1",
        "title":"cocinar",
        "complete":false
    }
]

app.get("/todo",(_req,res)=>{
    res.status(200).json(database)
})

app.post("/todos",(req,_res)=>{
    const todo=req.body

    database.push({
        "id":todo.id,
        "title":todo.title,
        "complete":false
    })
    _res.status(200).json(todo)
})


app.listen(3001,()=>{
    console.log("server listener in port 3001")
})