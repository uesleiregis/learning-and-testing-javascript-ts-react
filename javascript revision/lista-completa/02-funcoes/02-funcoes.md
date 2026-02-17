# 02 - Funções

## Declaração e Expressões

### Exercício 2.1 - Function Declaration vs Expression
Crie a mesma função de duas formas:
- Como function declaration
- Como function expression
Compare o comportamento de hoisting entre elas.

### Exercício 2.2 - Arrow Functions
Converta as seguintes funções tradicionais para arrow functions:
- Uma função que retorna a soma de dois números
- Uma função que recebe um array e retorna o dobro de cada elemento
- Uma função que não recebe parâmetros e retorna a data atual

### Exercício 2.3 - Retorno Implícito
Crie arrow functions usando retorno implícito (sem chaves e sem `return`) para:
- Calcular o quadrado de um número
- Verificar se um número é par
- Retornar um objeto com propriedades `nome` e `idade`

## Parâmetros

### Exercício 2.4 - Parâmetros Default
Crie uma função de saudação que receba `nome` e `saudacao`, onde `saudacao` tem valor padrão "Olá".

### Exercício 2.5 - Rest Parameters
Crie uma função que receba um número indefinido de argumentos e retorne:
- A soma de todos eles
- O maior valor entre eles
- Um array com apenas os números pares

### Exercício 2.6 - Destructuring em Parâmetros
Crie uma função que receba um objeto `usuario` e use destructuring nos parâmetros para extrair `nome`, `email` e `idade` (com valor padrão 18).

## Callbacks e Higher-Order Functions

### Exercício 2.7 - Callbacks Básicos
Crie uma função `processar` que receba um número e uma função callback, e execute o callback com esse número.

### Exercício 2.8 - Função que Retorna Função
Crie uma função `multiplicador` que receba um número `x` e retorne uma nova função que multiplica seu argumento por `x`.

### Exercício 2.9 - Processamento de Array
Crie uma função `procesarArray` que receba um array e uma função callback, e aplique o callback a cada elemento do array, retornando um novo array com os resultados.

## Closures

### Exercício 2.10 - Contador com Closure
Crie uma função `criarContador` que retorne um objeto com métodos `incrementar()`, `decrementar()` e `valor()`, mantendo o contador privado através de closure.

### Exercício 2.11 - Cache com Closure
Crie uma função que implemente um sistema de cache simples usando closure. A função deve memorizar resultados de cálculos anteriores.

### Exercício 2.12 - Factory de Funções
Crie uma função `criarSaudacao` que receba um idioma ("pt", "en", "es") e retorne uma função que saúda pessoas naquele idioma.

## This e Bind

### Exercício 2.13 - Contexto do This
Crie exemplos que demonstrem como o valor de `this` muda em:
- Função regular
- Arrow function
- Método de objeto
- Event handler (simule com um objeto)

### Exercício 2.14 - Bind, Call e Apply
Dado um objeto `pessoa` com método `apresentar()`, use `bind`, `call` e `apply` para executar esse método em contextos diferentes.

### Exercício 2.15 - Arrow Functions e This
Crie um objeto com um método que usa `setTimeout`. Compare o comportamento usando função regular vs arrow function dentro do `setTimeout`.

## Recursão

### Exercício 2.16 - Fatorial
Implemente uma função recursiva para calcular o fatorial de um número.

### Exercício 2.17 - Fibonacci
Implemente uma função recursiva para retornar o n-ésimo número da sequência de Fibonacci.

### Exercício 2.18 - Soma de Array Recursiva
Implemente uma função recursiva que some todos os elementos de um array.
