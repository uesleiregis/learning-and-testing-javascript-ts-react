# 05 - Features Modernas do JavaScript (ES6+)

## Spread e Rest

### Exercício 5.1 - Spread em Arrays
Use spread operator para:
- Concatenar arrays
- Adicionar elementos no início/meio/fim de um array
- Criar cópia de array
- Passar array como argumentos para função

### Exercício 5.2 - Spread em Objetos
Use spread operator para:
- Mesclar objetos
- Adicionar/sobrescrever propriedades
- Criar objeto com propriedades condicionais

### Exercício 5.3 - Rest Parameters
Crie funções usando rest parameters para:
- Aceitar número variável de argumentos
- Combinar com parâmetros nomeados
- Diferenciar entre rest parameters e spread operator

## Template Literals

### Exercício 5.4 - Interpolação Básica
Crie strings complexas usando template literals com:
- Variáveis
- Expressões
- Chamadas de função

### Exercício 5.5 - Multi-linha
Use template literals para criar strings multi-linha formatadas (como HTML ou JSON).

### Exercício 5.6 - Tagged Templates
Crie uma função que processa template literals (tagged template) para:
- Destacar variáveis
- Sanitizar input
- Formatar valores monetários

## Destructuring Avançado

### Exercício 5.7 - Destructuring em Loops
Use destructuring para extrair valores ao iterar sobre:
- Array de arrays
- Array de objetos
- Entries de um objeto

### Exercício 5.8 - Destructuring em Parâmetros
Crie funções que usem destructuring nos parâmetros para:
- Extrair propriedades específicas de objetos
- Fornecer valores padrão
- Renomear propriedades

### Exercício 5.9 - Swap de Variáveis
Use destructuring para trocar valores entre variáveis sem usar variável temporária.

## Enhanced Object Literals

### Exercício 5.10 - Property Shorthand
Crie objetos usando shorthand quando o nome da propriedade é igual ao nome da variável.

### Exercício 5.11 - Method Shorthand
Defina métodos em objetos usando a sintaxe simplificada do ES6.

### Exercício 5.12 - Computed Property Names
Crie objetos com propriedades cujos nomes são calculados dinamicamente.

## Classes (Básico)

### Exercício 5.13 - Definição de Classe
Crie uma classe `Pessoa` com:
- Constructor
- Propriedades
- Métodos
- Instancie objetos dessa classe

### Exercício 5.14 - Getters e Setters
Adicione getters e setters à classe para:
- Controlar acesso a propriedades
- Validar valores ao setar
- Calcular propriedades derivadas

### Exercício 5.15 - Métodos Estáticos
Adicione métodos estáticos à classe que podem ser chamados sem instanciar.

### Exercício 5.16 - Herança
Crie uma classe `Estudante` que herda de `Pessoa`:
- Use `extends`
- Use `super()` no constructor
- Override métodos
- Adicione novos métodos

## Símbolos

### Exercício 5.17 - Criação e Uso de Symbols
Crie symbols e use-os como:
- Chaves de propriedades únicas
- Propriedades "privadas"
- Evitar colisão de nomes

### Exercício 5.18 - Well-known Symbols
Explore symbols bem conhecidos como `Symbol.iterator` criando objetos iteráveis customizados.

## Iterators e Generators

### Exercício 5.19 - For...of
Use `for...of` para iterar sobre:
- Arrays
- Strings
- Maps e Sets
- Objetos customizados iteráveis

### Exercício 5.20 - Implementar Iterator
Crie um objeto que implemente o protocolo de iteração (Symbol.iterator).

### Exercício 5.21 - Generator Functions
Crie generator functions usando `function*` e `yield` para:
- Gerar sequência de números
- Criar iteradores customizados
- Pausar e retomar execução

### Exercício 5.22 - Generator Infinito
Crie um generator que gere sequência infinita (Fibonacci, números primos, etc.).

## Maps e Sets

### Exercício 5.23 - Map Básico
Use `Map` para:
- Armazenar pares chave-valor
- Iterar sobre entradas
- Comparar com objetos normais

### Exercício 5.24 - Set Básico
Use `Set` para:
- Armazenar valores únicos
- Remover duplicatas de array
- Operações de conjunto (união, interseção, diferença)

### Exercício 5.25 - WeakMap e WeakSet
Explore `WeakMap` e `WeakSet` para:
- Entender garbage collection
- Armazenar metadados de objetos
- Cache que não previne garbage collection

## Novos Métodos de String

### Exercício 5.26 - StartsWith, EndsWith, Includes
Use esses métodos para:
- Validar formatos
- Buscar em strings
- Comparar com métodos tradicionais

### Exercício 5.27 - Repeat, PadStart, PadEnd
Crie formatações usando:
- `repeat()` para repetir strings
- `padStart()` e `padEnd()` para preencher com caracteres

### Exercício 5.28 - Template e Trim
Use `trimStart()`, `trimEnd()`, `trim()` para limpar espaços em branco.

## Exponencial e Métodos Numéricos

### Exercício 5.29 - Operador Exponencial
Use `**` para calcular potências e compare com `Math.pow()`.

### Exercício 5.30 - Number Methods
Explore métodos como:
- `Number.isNaN()` vs `isNaN()`
- `Number.isFinite()`
- `Number.isInteger()`
- `Number.parseFloat()` e `Number.parseInt()`

## Optional Chaining e Nullish Coalescing

### Exercício 5.31 - Optional Chaining em Diferentes Contextos
Use `?.` para:
- Acessar propriedades aninhadas
- Chamar métodos que podem não existir
- Acessar elementos de array que podem ser undefined

### Exercício 5.32 - Nullish Coalescing
Use `??` para:
- Fornecer valores padrão
- Comparar com `||`
- Combinar com optional chaining

### Exercício 5.33 - Combinação de Operadores Modernos
Combine `?.`, `??` e destructuring para trabalhar com dados de APIs que podem ter campos opcionais.

## Desafios Integradores

### Exercício 5.34 - Refatoração ES6
Dado um código JavaScript antigo, refatore usando features modernas:
- var → const/let
- Functions → Arrow functions
- Concatenação → Template literals
- Objetos → Enhanced object literals

### Exercício 5.35 - Pipeline de Processamento
Crie um pipeline que use múltiplas features ES6+ para processar dados:
- Destructuring para extrair dados
- Spread para combinar/copiar
- Map/Set para operações únicas
- Template literals para formatação

### Exercício 5.36 - Factory com Features Modernas
Crie uma factory function que use:
- Parâmetros default e rest
- Destructuring
- Enhanced object literals
- Private data usando WeakMap ou closures

### Exercício 5.37 - Iterator Personalizado
Implemente um objeto iterável customizado que:
- Use Symbol.iterator
- Implemente lazy evaluation
- Permita chaining de transformações

### Exercício 5.38 - Classe Completa
Crie uma classe completa que use:
- Private fields (#)
- Static methods
- Getters/setters
- Herança
- Symbol para propriedades especiais
