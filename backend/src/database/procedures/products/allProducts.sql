

-- use Shopie

create or alter procedure allProducts
as
begin

select * from Products
where isDeleted = 1
end