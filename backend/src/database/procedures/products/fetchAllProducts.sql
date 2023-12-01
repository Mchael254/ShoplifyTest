

-- use Shopie

create or alter procedure fetchAllProducts
as
begin

select * from Products
where isDeleted = 0
end