create database Shopie

use Shopie

-- create table Users (
--     userID VARCHAR(300) not null PRIMARY KEY,
--     userName VARCHAR(255) not null,
--     email VARCHAR(255) not null UNIQUE,
--     password VARCHAR(255) not null,
--     phone_no VARCHAR (250) UNIQUE, 
--     role varchar(20) DEFAULT 'customer',
--     Welcomed bit DEFAULT 0,
--     isOrder bit DEFAULT 0
-- )


alter table Users
add emailSent bit DEFAULT 0
-- drop column passwordReset

-- Identify the default constraint


alter table Users
-- add expiryTime int
-- add resetToken varchar(255) null
add expiryTime int

-- add passwordReset bit DEFAULT 0 
-- add review VARCHAR(250)

select * from Users

delete from Users 
where email = 'james@gmail.com'