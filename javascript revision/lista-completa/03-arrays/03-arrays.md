# 03 - Arrays e Métodos

## Criação e Manipulação Básica

### Exercício 3.1 - Criação de Arrays
Crie arrays de diferentes formas:
- Literal `[]`
- Constructor `new Array()`
- `Array.from()`
- `Array.of()`
- Spread operator para copiar/concatenar arrays

### Exercício 3.2 - Acesso e Modificação
Dado um array de números, pratique:
- Acessar elementos por índice (incluindo negativos com slice)
- Modificar elementos
- Adicionar elementos no início, meio e fim
- Remover elementos do início, meio e fim

### Exercício 3.3 - Métodos Destrutivos vs Não-Destrutivos
Compare o comportamento de métodos que modificam o array original vs os que retornam novo array:
- `push/pop` vs `concat`
- `shift/unshift` vs `slice`
- `sort` vs `toSorted` (se disponível)
- `reverse` vs spread + reverse

## Métodos Essenciais para React

### Exercício 3.4 - Map
Dado um array de objetos representando produtos (nome, preço), use `map` para:
- Criar um array apenas com os nomes
- Criar um array com os preços com desconto de 10%
- Criar um array de elementos JSX simulados (strings no formato `<li>nome - R$ preço</li>`)

### Exercício 3.5 - Filter
Dado um array de números, use `filter` para:
- Obter apenas números pares
- Obter apenas números maiores que 10
- Obter apenas números positivos
- Combinar múltiplas condições

### Exercício 3.6 - Find e FindIndex
Dado um array de usuários (objetos com id, nome, email):
- Use `find` para encontrar um usuário por email
- Use `findIndex` para encontrar a posição de um usuário por id
- Use `findLast` para encontrar o último usuário com determinada condição

### Exercício 3.7 - Reduce
Use `reduce` para:
- Somar todos os números de um array
- Calcular a média de valores
- Contar quantas vezes cada item aparece em um array (retornar objeto)
- Achatar um array de arrays (flatten)
- Agrupar objetos por uma propriedade

### Exercício 3.8 - Some e Every
Dado um array de idades:
- Verifique se existe pelo menos um menor de idade
- Verifique se todos são maiores de idade
- Verifique se algum número é maior que 100

### Exercício 3.9 - Sort
Ordene arrays de diferentes tipos:
- Números (crescente e decrescente)
- Strings (alfabeticamente)
- Objetos por uma propriedade numérica
- Objetos por uma propriedade string

## Encadeamento de Métodos

### Exercício 3.10 - Chaining Simples
Dado um array de números, encadeie métodos para:
- Filtrar apenas pares, multiplicar por 2, e somar tudo
- Remover duplicatas, ordenar, e pegar os 5 primeiros

### Exercício 3.11 - Processamento de Dados Complexo
Dado um array de transações (objetos com tipo, valor, data):
- Filtre apenas as transações do tipo "compra"
- Calcule o total gasto
- Retorne um objeto com estatísticas (total, média, quantidade)

### Exercício 3.12 - Pipeline de Transformação
Crie um pipeline que receba um array de usuários e:
1. Filtre usuários ativos
2. Mapeie para adicionar um campo `nomeCompleto`
3. Ordene por idade
4. Retorne apenas os 10 primeiros

## Métodos Adicionais Úteis

### Exercício 3.13 - Includes, IndexOf, LastIndexOf
Pratique busca em arrays:
- Verificar se um elemento existe
- Encontrar a primeira posição de um elemento
- Encontrar a última posição de um elemento

### Exercício 3.14 - Slice e Splice
- Use `slice` para copiar partes de um array sem modificá-lo
- Use `splice` para inserir, remover e substituir elementos

### Exercício 3.15 - Join e Split
- Converta um array em string usando diferentes separadores
- Converta uma string em array (lembre-se: `split` é de String)

### Exercício 3.16 - Flat e FlatMap
- Achate arrays aninhados em diferentes níveis
- Use `flatMap` para mapear e achatar em uma operação

## Desafios Práticos

### Exercício 3.17 - Carrinho de Compras
Implemente funções para um carrinho de compras:
- Adicionar item
- Remover item
- Atualizar quantidade
- Calcular total
- Aplicar cupom de desconto

### Exercício 3.18 - Filtros Múltiplos
Crie um sistema de filtros para uma lista de produtos que permita filtrar por:
- Faixa de preço
- Categoria
- Disponibilidade
Os filtros devem poder ser combinados.

### Exercício 3.19 - Paginação
Implemente funções para paginar um array:
- Função que retorna uma página específica dado o número da página e itens por página
- Função que retorna o número total de páginas

### Exercício 3.20 - Busca e Ordenação
Implemente uma função que receba um array de produtos e:
- Busque por nome (parcial, case-insensitive)
- Ordene pelo critério especificado (nome, preço, popularidade)
- Retorne os resultados filtrados e ordenados
