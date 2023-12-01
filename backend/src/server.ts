import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import user_router from './routes/userRoutes'
import product_router from './routes/productRoutes'
import order_router from './routes/orderRoutes'


dotenv.config()
const port = process.env.PORT ||5200
const app = express()
app.use(json())
app.use(cors())

app.use('/user',user_router)
app.use('/product',product_router)
app.use('/order',order_router)

app.listen(port,()=>{
    console.log(`Shopie running on port ${port}`);
    
});