insert into empresas
    (nome, cnpj)
values('Bradesco', 88959000000312),
    ('Vale', 95986300005812),
    ('codex', 12559009011005);

alter table empresas MODIFY cnpj varchar
(14);

select *
from empresas;

desc empresas;
desc cidades;

select *
from cidades

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)