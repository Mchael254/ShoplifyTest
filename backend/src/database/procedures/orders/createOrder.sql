
-- use Shopie 



-- CREATE TYPE OrderItemsType AS TABLE
-- (
--     productID VARCHAR(300),
--     quantity INT,
--     productPrice INT,
--     productImage VARCHAR(250),
--     productName VARCHAR(250),
--     productDescription VARCHAR(500)
-- );


-- DROP TYPE OrderItemsType;

-- DROP PROCEDURE PlaceOrder;



-- CREATE PROCEDURE PlaceOrder
--     @p_orderID VARCHAR(500),
--     @p_orderDate DATE,
--     @p_email VARCHAR(255),
--     @p_totalAmount INT,
--     @p_orderItems OrderItemsType READONLY
-- AS
-- BEGIN
    
--     BEGIN TRANSACTION;

    
--     INSERT INTO Orders (orderID, orderDate, email, totalAmount)
--     VALUES (@p_orderID, @p_orderDate, @p_email, @p_totalAmount);

   
--     INSERT INTO OrderItems (orderID, productID, quantity, productPrice, productImage, productName, productDescription)
--     SELECT 
--         @p_orderID, 
--         oi.productID, 
--         oi.quantity, 
--         oi.productPrice, 
--         oi.productImage, 
--         oi.productName, 
--         oi.productDescription
--     FROM @p_orderItems oi;

  
--     UPDATE p
--     SET Quantity = p.Quantity - oi.quantity
--     FROM Products p
--     JOIN @p_orderItems oi ON p.productID = oi.productID;

   
--     COMMIT TRANSACTION;
-- END;



-- drop PROCEDURE PlaceOrder

-- select * from Orders





   
   
