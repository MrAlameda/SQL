
const uuid=require("uuid")
const products=require("./schema/product.model")

export const getAllProducts=()=>{
    const data=products.findAll()
    return data
}

export const createProduct=async(data:any)=>{
    const newProduct=await products.create({
        id:uuid.v4(),
        name:data.name,
        category:data.category,
        price:data.price,
        isAvailable:data.isAvailable
    })

    return newProduct
}

export const getProductById=async(id:string)=>{
    const data=await products.findOne({
        where: {
            id
        },
    });
    return data
}


export const updateProduct=async(id:string,data:any)=>{
    const resp=await products.update(data,{
        where:{
            id
        }
    })
    return resp
}

export const deleteProduct=async(id:string)=>{
    const data = await products.destroy({
        where:{
            id
        }
    })
    return data
} 

module.exports={createProduct,getAllProducts,getProductById,deleteProduct,updateProduct}