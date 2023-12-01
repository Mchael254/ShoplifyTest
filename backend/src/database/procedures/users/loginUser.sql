

-- use Shopie
-- select * from Users
create  PROCEDURE loginUser(
    @email varchar(200),
    @password VARCHAR(200)
)
as
BEGIN
    select * from Users where email = @email 
end


