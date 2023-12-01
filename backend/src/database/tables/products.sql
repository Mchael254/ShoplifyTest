
use Shopie
select * from Products

-- CREATE TABLE Products (
--     productID VARCHAR(300) PRIMARY KEY,
--     productName VARCHAR(250),
--     productDescription VARCHAR(500),
--     productPrice INT,
--     productCategory VARCHAR(250),
--     productImage VARCHAR(250),
--     supplierContact VARCHAR(250),
--     Quantity int
-- )

alter table Products
add isDeleted bit default 0

SELECT * FROM Products

drop table Products

-- delete from Products
-- where productID = 'eaa91fba-53bf-4604-a75f-28ddd947b6e3'


-- https://m.media-amazon.com/images/I/61c1QC4lF-L._AC_UL320_.jpg
-- https://m.media-amazon.com/images/I/61k7JqSWOUL._SY425_.jpg
-- https://m.media-amazon.com/images/I/61k7JqSWOUL._SY425_.jpg
-- https://m.media-amazon.com/images/I/71DMD+kUQFL._AC_UL320_.jpg
-- https://m.media-amazon.com/images/I/71HOVTfoB4L._AC_UL320_.jpg





