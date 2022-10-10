import { Response,Request, response } from "express";

const productsControlles=require("./products.controllers")

const getAllProducts=({_req,res}:any)=>{
    productsControlles
      .getAllProducts()
      .then((data:any) => {
        res.status(200).json(data);
      })
      .catch((err:Error) => {
        res.status(400).json({message:err.message});
      });
};

const postProduct=(req:Request,res:Response)=>{
    const data=req.body
res.json({data})

    if(data.name && data.category && data.price && data.isAvailable){
        productsControlles.createProduct(data)
            .then((resp:any)=>res.status(201).json(resp))
            .catch((err:Error)=>{res.status(400).json({message:err.message})})
    }
    else{
        res.status(400).json({message:"Missing data"})
    }
}

const getProductById=(req:Request,_res:Response)=>{
    const id=req.params.id

    productsControlles.getProductById(id)
        .then((res:any)=>{
            if(id){
                _res.status(200).json(res)
            }else{
                _res.status(400).json({message:"Invalid ID"})
            }
        })
        .catch((err:Error)=>_res.status(404).json({message:"that not exist",err:err.message}))
}

const deleteProduct=(req:Request,_res:Response)=>{
    const id= req.params.id
    productsControlles.deleteProduct(id)
        .then((resp:any)=>{
            if(resp){
                _res.status(204).json()
            }else{
                _res.status(400).json({message:"invalid id"})
            }
        })
        .catch((err:Error)=>{
            _res.status(400).json({message:err.message})
        })
}

const updateProduct=(req:Request,_res:Response)=>{
    const id= req.params.id
    const {name,category,price,isAvailable}=req.body

    productsControlles.updateProduct(id,{name,category,price,isAvailable})
        .then((resp:any)=>{
            if(resp[0]){
                _res.status(200).json({message:`the product ${id} edited succesfully`})
            }else{
                _res.status(200).json({message:"invalid id"})
            }
        })
        .catch((err:Error)=>{
            response.status(400).json({message:err.message})
        })

}
module.exports={getAllProducts,postProduct,getProductById,updateProduct,deleteProduct}