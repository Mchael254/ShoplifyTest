
-- use Shopie

CREATE or alter PROCEDURE GetOrdersWithItems
AS
BEGIN
    SELECT
        orders.orderID,
        orders.orderDate,
        orders.email,
        orders.totalAmount,
        orderItems.productID,
        orderItems.quantity,
        orderItems.productPrice,
        orderItems.productName,
        orderItems.productImage,
        orderItems.productDescription
    FROM
        orders
    INNER JOIN
        orderItems ON orders.orderID = orderItems.orderID;
END;
