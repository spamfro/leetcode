truncate table Products;
insert into Products(product_id,new_price,change_date) values('1','20','2019-08-14');
insert into Products(product_id,new_price,change_date) values('2','50','2019-08-14');
insert into Products(product_id,new_price,change_date) values('1','30','2019-08-15');
insert into Products(product_id,new_price,change_date) values('1','35','2019-08-16');
insert into Products(product_id,new_price,change_date) values('2','65','2019-08-17');
insert into Products(product_id,new_price,change_date) values('3','20','2019-08-18');
truncate table Expected;
insert into Expected(product_id,price) values('2','50');
insert into Expected(product_id,price) values('1','35');
insert into Expected(product_id,price) values('3','10');