
-- use Shopie 

CREATE OR ALTER PROCEDURE updateProduct
    @productID VARCHAR(300),
    @productName VARCHAR(250),
    @productDescription VARCHAR(500),
    @productPrice INT,
    @productCategory VARCHAR(250),
    @productImage VARCHAR(250),
    @supplierContact VARCHAR(250),
    @Quantity INT
AS
BEGIN
    -- productID check
    IF EXISTS (
        SELECT 1
        FROM Products
        WHERE productID = @productID
    )
    BEGIN
        UPDATE Products
        SET 
            productName = @productName,
            productDescription = @productDescription,
            productPrice = @productPrice,
            productCategory = @productCategory,
            productImage = @productImage,
            supplierContact = @supplierContact,
            Quantity = @Quantity
        WHERE productID = @productID;

        SELECT @productID AS UpdatedproductID;
    END
    ELSE
    BEGIN
        -- Handle the case where the productID does not exist
        SELECT -1 AS updateResult;
    END
END;
