
import Router from "express";
import { deleteOrder, getAllorders, getOrdersWithItems, makeOrder } from "../controllers/orderControllers";



const order_router = Router();

order_router.post("/makeOrder", makeOrder)
order_router.get('/',getAllorders)
order_router.get('/getOrders',getOrdersWithItems)
order_router.delete('/deleteOrder',deleteOrder)



export default order_router


