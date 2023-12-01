
import mssql from 'mssql';
import { sqlConfig } from '../config/sqlConfig';
import { Request, Response } from 'express';
import { v4 } from 'uuid';


//make order
export const makeOrder = async (req: Request, res: Response) => {
    try {
        const { orderDate, email, items, totalAmount } = req.body;
        let orderID = v4();

        const processedItems = mapItemsToNumbers(items);

        const pool = await mssql.connect(sqlConfig);

        const orderItemsTable = new mssql.Table();
        orderItemsTable.columns.add('productID', mssql.VarChar(300));
        orderItemsTable.columns.add('quantity', mssql.Int);
        orderItemsTable.columns.add('productPrice', mssql.Int);
        orderItemsTable.columns.add('productImage', mssql.VarChar(250));
        orderItemsTable.columns.add('productName', mssql.VarChar(250));
        orderItemsTable.columns.add('productDescription', mssql.VarChar(500));

        processedItems.forEach(item => {
            orderItemsTable.rows.add(
                item.productID,
                item.quantity,
                item.productPrice,
                item.productImage,
                item.productName,
                item.productDescription
            );
        });

        const orderDetails = await pool.request()
            .input('p_orderID', mssql.VarChar(500), orderID)
            .input('p_orderDate', mssql.Date, orderDate)
            .input('p_email', mssql.VarChar(255), email)
            .input('p_totalAmount', mssql.Int, totalAmount)
            .input('p_orderItems', orderItemsTable)
            .execute('PlaceOrder');

        return res.status(200).json({
            message: 'Order placed successfully',
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Internal server error',
        });
    }
};

function mapItemsToNumbers(items: any[]) {
    return items.map(item => ({
        ...item,
        quantity: parseInt(item.quantity, 10),
        productPrice: parseInt(item.productPrice, 10),
    }));
}






//fetch all orders
export const getAllorders = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request().execute("fetchAllOrders");

        if (result.recordset && result.recordset.length > 0) {
            const products = result.recordset;
            return res.status(200).json(products);
        } else {
            return res.status(200).json([]);
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}

//fetch orders with items
export const getOrdersWithItems = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        
        const result = await pool.request().execute('GetOrdersWithItems');

        return res.status(200).json({
            ordersWithItems: result.recordset,
            message: 'Orders fetched successfully',
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Internal server error',
        });
    }
};


//delete order
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { orderID } = req.body;

        const pool = await mssql.connect(sqlConfig);

        // Execute the stored procedure
        const result = await pool.request()
            .input('p_orderID', mssql.VarChar(255), orderID)
            .execute('deleteOrder');

        // Check the result for success or handle as needed
        if (result.rowsAffected[0] > 0) {
            return res.status(200).json({
                message: 'Orders deleted successfully',
            });
        } else {
            return res.status(404).json({
                message: 'No orders found for the provided ID',
            });
        }
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Internal server error',
        });
    }
};