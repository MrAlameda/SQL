import { Express } from "express"
const express=require("express")
const app:Express=express()

//* routes
const me = require("./routes/me")
const metas=require("./routes/metas")
const business=require("./routes/business")
const todo=require("./todos/todo.index")
const user=require("./users/users.index")
//* middleware
app.use(express.json())


//*Routes
app.use("/me",me)
app.use("/metas",metas)
app.use("/business",business)
app.use("/todo",todo)
app.use("/users",user)

app.listen(3001,()=>{
    console.log("server listener in port 3001")
})