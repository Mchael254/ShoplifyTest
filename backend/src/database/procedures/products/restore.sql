
-- use Shopie
-- restore
CREATE OR ALTER PROCEDURE restoreProduct
    @productID VARCHAR(300)
AS
BEGIN
    UPDATE Products
    SET isDeleted = 0
    WHERE productID = @productID;
END;
