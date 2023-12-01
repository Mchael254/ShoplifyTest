

-- use Shopie

-- create or alter procedure deleteProduct
--     @productID varchar(300)
-- AS
-- BEGIN
--     delete from Products
--     where productID = @productID
-- END;

--soft  delete
-- CREATE OR ALTER PROCEDURE softDeleteProduct
--     @productID VARCHAR(300)
-- AS
-- BEGIN
--     UPDATE Products
--     SET isDeleted = 1
--     WHERE productID = @productID;
-- END;
