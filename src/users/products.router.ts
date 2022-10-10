import { Express } from "express"


const exprees=require("express")
const router:Express=exprees.Router()
const productServices=require("./products.services")

router.get('/',productServices.getAllProducts)
router.post('/',productServices.postProduct)

router.get('/:id',productServices.getProductById)
router.patch("/:id",productServices.updateProduct)
router.delete("/:id",productServices.deleteProduct)

// router.post('/',)

// router.get('/:id',)

module.exports=router
