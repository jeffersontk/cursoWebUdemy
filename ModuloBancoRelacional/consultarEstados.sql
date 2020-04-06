-- Selecionar itens da tabela

-- selecionar toda a tabela
SELECT *
from estados

--filtrar por campo escolhido
select sigla, nome
from estados

--Renomear exibição da coluna
select sigla, nome  as 'Nome do estado'
from estados

-- filtrar linha com condição pelo campo da tabela
select sigla, nome  as 'Nome do estado'
from estados
where regiao = 'sul'

--filtrar  linha por uma condição matematica
select nome, regiao
from estados
where populacao >= 10

--filtrar  linha por uma condição matematica e aplicar ordenação crescente
select nome, regiao
from estados
where populacao >= 10
order by populacao

--filtrar  linha por uma condição matematica e aplicar ordenação decrescente
select nome, regiao
from estados
where populacao >= 10
order by populacao desc