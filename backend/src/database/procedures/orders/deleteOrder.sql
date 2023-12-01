

-- use Shopie


-- CREATE or alter PROCEDURE  deleteOrder
--     @p_orderID VARCHAR(255)
-- AS
-- BEGIN
--     -- Start a transaction to ensure atomicity
--     BEGIN TRANSACTION;

--     -- Delete from OrderItems table for each order
--     DELETE FROM OrderItems
--     WHERE orderID IN (SELECT orderID FROM Orders WHERE orderID = @p_orderID);

--     -- Delete from Orders table
--     DELETE FROM Orders
--     WHERE orderID = @p_orderID;

--     -- Commit the transaction
--     COMMIT TRANSACTION;
-- END;
