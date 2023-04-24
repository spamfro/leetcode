Truncate table Person;
insert into Person (id, name, phone_number) values ('3', 'Jonathan', '051-1234567');
insert into Person (id, name, phone_number) values ('12', 'Elvis', '051-7654321');
insert into Person (id, name, phone_number) values ('1', 'Moncef', '212-1234567');
insert into Person (id, name, phone_number) values ('2', 'Maroua', '212-6523651');
insert into Person (id, name, phone_number) values ('7', 'Meir', '972-1234567');
insert into Person (id, name, phone_number) values ('9', 'Rachel', '972-0011100');
Truncate table Country;
insert into Country (name, country_code) values ('Peru', '051');
insert into Country (name, country_code) values ('Israel', '972');
insert into Country (name, country_code) values ('Morocco', '212');
insert into Country (name, country_code) values ('Germany', '049');
insert into Country (name, country_code) values ('Ethiopia', '251');
Truncate table Calls;
insert into Calls (caller_id, callee_id, duration) values ('1', '9', '33');
insert into Calls (caller_id, callee_id, duration) values ('2', '9', '4');
insert into Calls (caller_id, callee_id, duration) values ('1', '2', '59');
insert into Calls (caller_id, callee_id, duration) values ('3', '12', '102');
insert into Calls (caller_id, callee_id, duration) values ('3', '12', '330');
insert into Calls (caller_id, callee_id, duration) values ('12', '3', '5');
insert into Calls (caller_id, callee_id, duration) values ('7', '9', '13');
insert into Calls (caller_id, callee_id, duration) values ('7', '1', '3');
insert into Calls (caller_id, callee_id, duration) values ('9', '7', '1');
insert into Calls (caller_id, callee_id, duration) values ('1', '7', '7');
