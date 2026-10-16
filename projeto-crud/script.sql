-- usuario: root
-- senha: catolica

create database userdb;

use userdb;

-- criar a tabela
create table users (
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null
);
