
use Shopie

CREATE TABLE Orders (
    orderID VARCHAR(500) PRIMARY KEY,
    orderDate DATE,
    email VARCHAR(255),
    totalAmount INT, 
);


alter table Orders
add email varchar(255) not null

drop table Orders



