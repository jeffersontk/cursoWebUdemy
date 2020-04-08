select *
from estados
select *
from cidades

INSERT INTO cidades
    (nome, area, estado_id)
VALUES('Campinas', 795, 25)

INSERT INTO cidades
    (nome, area, estado_id)
VALUES('Niteroi ', 133.9, 19)

INSERT INTO cidades
    (nome, area, estado_id)
VALUES('Caruaru', 920.6,
        (select id
        from estados
        where sigla ='PE')
)
