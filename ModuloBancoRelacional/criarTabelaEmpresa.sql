create table
if not exists empresas
( 
    id int unsigned not null auto_increment,
    nome varchar
(255) not null,
    cnpj int unsigned,
    PRIMARY key
(id),
    unique KEY
(cnpj)
);

-- cidades_empresas

create TABLE
if not EXISTS empresas_unidades
(
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede TINYINT
(1) not null,
    PRIMARY KEY
(empresa_id, cidade_id)
)