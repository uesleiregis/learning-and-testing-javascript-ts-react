# 04 - Objetos e Manipulação

## Criação e Acesso

### Exercício 4.1 - Criação de Objetos
Crie objetos usando diferentes sintaxes:
- Object literal `{}`
- Constructor `new Object()`
- `Object.create()`
- Factory function
- Constructor function

### Exercício 4.2 - Acesso a Propriedades
Dado um objeto, pratique acessar propriedades usando:
- Notação de ponto (`.`)
- Notação de colchetes (`[]`)
- Acesso com variáveis
- Propriedades computadas

### Exercício 4.3 - Propriedades Dinâmicas
Crie um objeto onde os nomes das propriedades são determinados em tempo de execução (computed property names).

## Destructuring

### Exercício 4.4 - Destructuring Básico
Dado um objeto `usuario` com várias propriedades, extraia propriedades específicas usando destructuring.

### Exercício 4.5 - Destructuring com Renomeação
Use destructuring para extrair propriedades e renomeá-las simultaneamente.

### Exercício 4.6 - Destructuring com Valores Padrão
Extraia propriedades que podem não existir, fornecendo valores padrão.

### Exercício 4.7 - Destructuring Aninhado
Dado um objeto com objetos aninhados, extraia propriedades profundas usando destructuring aninhado.

### Exercício 4.8 - Rest em Destructuring
Use o operador rest (`...`) para extrair algumas propriedades e capturar o restante em um novo objeto.

## Spread Operator

### Exercício 4.9 - Copiar e Mesclar Objetos
Use spread operator para:
- Copiar um objeto (shallow copy)
- Mesclar dois ou mais objetos
- Sobrescrever propriedades específicas

### Exercício 4.10 - Atualização Imutável
Pratique atualizar objetos de forma imutável (sem modificar o original):
- Atualizar uma propriedade
- Adicionar uma nova propriedade
- Remover uma propriedade (combine spread com destructuring)
- Atualizar propriedade aninhada

## Métodos de Object

### Exercício 4.11 - Object.keys, values, entries
Dado um objeto, use esses métodos para:
- Obter array de todas as chaves
- Obter array de todos os valores
- Obter array de pares [chave, valor]
- Iterar sobre o objeto

### Exercício 4.12 - Object.assign
Use `Object.assign` para:
- Copiar objetos
- Mesclar múltiplos objetos
- Adicionar propriedades a um objeto existente

### Exercício 4.13 - Object.freeze e Object.seal
Experimente congelar e selar objetos:
- Tente modificar um objeto congelado
- Tente adicionar/remover propriedades de um objeto selado
- Compare com objetos normais

### Exercício 4.14 - Object.hasOwnProperty
Verifique se propriedades existem diretamente no objeto (não herdadas).

## Métodos e This

### Exercício 4.15 - Métodos de Objeto
Crie um objeto `calculadora` com métodos `somar`, `subtrair`, `multiplicar` e `dividir` que usem propriedades do próprio objeto.

### Exercício 4.16 - This em Métodos
Crie um objeto `contador` com propriedade `valor` e métodos que a incrementem/decrementem usando `this`.

### Exercício 4.17 - Method Shorthand
Use a sintaxe simplificada de ES6 para definir métodos em objetos.

## JSON

### Exercício 4.18 - Serialização e Parse
Pratique conversão entre objetos e JSON:
- `JSON.stringify()` com diferentes objetos
- `JSON.parse()` para converter strings JSON em objetos
- Lidando com valores que não podem ser serializados (funções, undefined)

### Exercício 4.19 - JSON com Formatação
Use `JSON.stringify()` com parâmetros para formatar a saída de forma legível.

## Padrões Comuns

### Exercício 4.20 - Optional Chaining em Objetos
Dado um objeto com propriedades aninhadas opcionais, use `?.` para acessar valores profundos com segurança.

### Exercício 4.21 - Nullish Coalescing com Objetos
Use `??` para fornecer valores padrão ao acessar propriedades que podem ser null ou undefined.

### Exercício 4.22 - Computed Property Names
Crie objetos onde os nomes das propriedades são calculados dinamicamente usando `[expressão]`.

## Comparação e Clonagem

### Exercício 4.23 - Comparação de Objetos
Explore como JavaScript compara objetos:
- Comparação por referência vs por valor
- Implemente uma função para comparar objetos por suas propriedades (deep equality)

### Exercício 4.24 - Shallow vs Deep Copy
Implemente funções para:
- Fazer shallow copy de um objeto
- Fazer deep copy de um objeto (incluindo objetos aninhados)
- Compare os resultados ao modificar cópias

### Exercício 4.25 - Merge Profundo
Implemente uma função que mescle dois objetos de forma profunda (deep merge), incluindo objetos aninhados.

## Desafios Práticos

### Exercício 4.26 - Estado de Componente Simulado
Simule o estado de um componente React criando um objeto e funções para:
- Atualizar propriedades de forma imutável
- Atualizar arrays dentro do objeto imutavelmente
- Atualizar objetos aninhados imutavelmente

### Exercício 4.27 - Normalização de Dados
Dado um array de objetos com estrutura aninhada, normalize os dados em um formato flat (chave-valor).

### Exercício 4.28 - Form State Management
Crie um objeto que simule o estado de um formulário e funções para:
- Atualizar valores de campos
- Validar campos
- Resetar o formulário
- Obter apenas campos modificados

### Exercício 4.29 - Transformação de Dados de API
Dado um objeto de resposta de API (estrutura complexa), transforme-o em um formato mais simples para uso na aplicação.

### Exercício 4.30 - Cache de Objetos
Implemente um sistema de cache usando objetos onde:
- A chave é um identificador
- O valor é o dado cacheado
- Há método para limpar cache antigo (com timestamp)
