

-- use Shopie
-- select * from Products


CREATE or ALTER PROCEDURE createProduct
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
    INSERT INTO products (
        productID,
        productName,
        productDescription,
        productPrice,
        productCategory,
        productImage,
        supplierContact,
        Quantity
    )
    VALUES (
        @productID,
        @productName,
        @productDescription,
        @productPrice,
        @productCategory,
        @productImage,
        @supplierContact,
        @Quantity
    );
END





