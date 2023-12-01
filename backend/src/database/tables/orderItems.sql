
-- use Shopie

-- CREATE TABLE OrderItems (
--     orderItemID VARCHAR(500) PRIMARY KEY,
--     orderID VARCHAR(500),
--     productID VARCHAR(300),  
--     quantity INT,
--     productPrice INT,
--     FOREIGN KEY (orderID) REFERENCES Orders(orderID),
--     FOREIGN KEY (productID) REFERENCES Products(productID)
-- );
use Shopie
CREATE TABLE OrderItems_New (
    orderItemIDs INT IDENTITY(1,1) PRIMARY KEY,
    orderID VARCHAR(500),
    productID VARCHAR(300),  
    quantity INT,
    productPrice INT,
    FOREIGN KEY (orderID) REFERENCES Orders(orderID),
    FOREIGN KEY (productID) REFERENCES Products(productID)
);
alter table OrderItems
add productImage varchar(250),
productName varchar(250),
productDescription varchar(500)



-- select * from OrderItems
select * from Orders

SELECT * FROM Products
