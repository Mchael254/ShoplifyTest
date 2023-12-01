import Router from "express";
import { createProduct, deleteProduct, getAllproducts, 
    restoreProduct, 
    softDeletedProducts, updateProduct } from "../controllers/productControllers";


const product_router = Router();

product_router.post("/createproduct", createProduct)
product_router.get('/',getAllproducts)
product_router.get('/softDeletedProducts',softDeletedProducts)
product_router.put('/updateProduct',updateProduct)
product_router.delete('/deleteproduct',deleteProduct)
product_router.put('/restoreProduct',restoreProduct)



export default product_router


