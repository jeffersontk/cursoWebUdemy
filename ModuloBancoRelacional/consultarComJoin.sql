SELECT *
from prefietos;
SELECT *
from cidades;

select *
from cidades c inner join prefeitos p on c.id = p.cidade_id;

select *
from cidades c LEFT join prefeitos p on c.id = p.cidade_id;

select *
from cidades c RIGHT join prefeitos p on c.id = p.cidade_id;


    select *
    from cidades c LEFT join prefeitos p on c.id = p.cidade_id
union
    select *
    from cidades c RIGHT join prefeitos p on c.id = p.cidade_id;
