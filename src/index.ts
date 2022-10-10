import { Express } from "express"
import { variables } from "./postgres/config"
const express=require("express")
const app:Express=express()

//! test

// const db=require("./postgres/sequelize")
// const initModels=require("./postgres/services/initMovies")

const db_products_conect=require("./users/db/product.structure")
const initProduct=require("./users/initProducts")

db_products_conect.authenticate()
    .then(()=>console.log("todo corrercto"))
    .catch((err:Error)=>console.error(err))

db_products_conect.sync()
    .then(()=>console.log("Database synced"))
    .catch((err:Error)=>console.error(err))

initProduct()

//* routes
// const me = require("./routes/me")
// const metas=require("./routes/metas")
// const business=require("./routes/business")
// const todo=require("./todos/todo.index")
// const mo=require("./postgres/movie.index")
const home=require("./home/home")
const prod=require("./users/products.router")

//* middleware
app.use(express.json())


//*Routes
app.use("/",home)
app.use("/products",prod)
// app.use("/movie",mo)
// app.use("/me",me)
// app.use("/metas",metas)
// app.use("/business",business)
// app.use("/todo",todo)

app.listen(variables.port,()=>{
    console.log("server listener in port 3001")
})