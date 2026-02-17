# 01 - Fundamentos de JavaScript

## Variáveis e Tipos

### Exercício 1.1 - Declaração de Variáveis
Declare uma variável `nome` usando `let`, uma variável `idade` usando `const` e uma variável `cidade` usando `var`. Atribua valores iniciais a cada uma. Em seguida, tente reatribuir novos valores para as três variáveis. Anote qual delas permite reatribuição e qual gera erro.

### Exercício 1.2 - Tipos Primitivos
Crie 7 variáveis, cada uma com um tipo primitivo diferente:
- `texto`: uma string qualquer
- `numero`: um valor numérico
- `booleano`: true ou false
- `indefinido`: undefined
- `nulo`: null
- `simbolo`: Symbol('descricao')
- `numeroGigante`: 123456789012345678901234567890n

Use `console.log(typeof variavel)` em cada uma e observe os resultados. Note que `typeof null` retorna algo inesperado!

### Exercício 1.3 - Conversão de Tipos (Coerção)
Realize as seguintes operações e observe os resultados:
- `5 + "10"` (número + string)
- `"20" - 5` (string - número)
- `5 == "5"` vs `5 === "5"` (comparações)
- `0 == false` vs `0 === false`
- `Number("42")`, `Number("abc")`, `Number(true)`
- `String(100)`, `String(null)`, `String(undefined)`
- `Boolean(0)`, `Boolean("")`, `Boolean("false")`, `Boolean([])`

Anote os resultados e identifique os padrões de conversão.

### Exercício 1.4 - Template Literals
Crie uma função `apresentar(nome, idade, cidade)` que retorne a seguinte frase usando template literals: "Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade]." Teste a função com valores como `apresentar("João", 25, "São Paulo")`.

## Operadores

### Exercício 1.5 - Operadores Lógicos
Crie uma função `validarLogin(email, senha)` que retorne:
- `true` se email E senha não estiverem vazios (use `&&`)
- Depois crie uma função `temContato(email, telefone)` que retorne `true` se pelo menos um dos dois estiver preenchido (use `||`)
- Por fim, crie uma função `naoEstaVazio(valor)` que use `!` para inverter o resultado de verificar se o valor está vazio

### Exercício 1.6 - Nullish Coalescing
Crie variáveis com diferentes valores e teste com ambos operadores:
```javascript
const valor1 = 0 || "padrão";        // ?
const valor2 = 0 ?? "padrão";        // ?
const valor3 = "" || "padrão";      // ?
const valor4 = "" ?? "padrão";      // ?
const valor5 = false || "padrão";   // ?
const valor6 = false ?? "padrão";   // ?
const valor7 = null || "padrão";    // ?
const valor8 = null ?? "padrão";    // ?
```
Anote os resultados e identifique quando `??` é mais apropriado que `||`.

### Exercício 1.7 - Optional Chaining
Crie um objeto `usuario` com a seguinte estrutura:
```javascript
const usuario = {
  nome: "Ana",
  endereco: {
    rua: "Av. Paulista",
    numero: 1000
  }
};
```
Tente acessar:
- `usuario.endereco.rua` (existe)
- `usuario.endereco.complemento` (não existe)
- `usuario.contato.email` (contato não existe - causaria erro!)

Use `?.` para acessar `usuario.contato?.email` e `usuario.endereco?.complemento` com segurança.

## Estruturas de Controle

### Exercício 1.8 - Condicionais
Crie uma função que receba uma nota (0-100) e retorne o conceito:
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59

### Exercício 1.9 - Switch Case
Reescreva a função `obterConceito` do exercício anterior usando `switch`. Dica: você pode usar `Math.floor(nota / 10)` para criar casos de 0 a 10, onde 9 e 10 retornam 'A', 8 retorna 'B', etc. Não esqueça do `break` em cada caso!

### Exercício 1.10 - Ternário
Crie uma função `classificarIdade(idade)` que use o operador ternário para retornar "maior de idade" se idade >= 18, ou "menor de idade" caso contrário. A sintaxe deve ser: `return condicao ? valorSeTrue : valorSeFalse;`

### Exercício 1.11 - Loops
Crie 4 funções diferentes, cada uma imprimindo números de 1 a 10 no console:
- `imprimirComFor()`: use `for(let i = 1; i <= 10; i++)`
- `imprimirComWhile()`: use `while` com contador
- `imprimirComDoWhile()`: use `do...while`
- `imprimirComForOf()`: crie array `[1,2,3,4,5,6,7,8,9,10]` e use `for(const num of array)`

### Exercício 1.12 - Break e Continue
Crie uma função `loopComControle()` com um `for` que percorra números de 1 a 20:
- Use `if (i % 3 === 0) continue;` para pular múltiplos de 3
- Use `if (i % 7 === 0 && i > 10) break;` para parar no primeiro múltiplo de 7 maior que 10
- Imprima no console apenas os números que não foram pulados/parados

O resultado esperado deve ser: 1, 2, 4, 5, 7, 8, 10, 11, 13 (para em 14)

## Escopo

### Exercício 1.13 - Escopo de Variáveis
Crie três testes para entender escopo:

**Teste 1 - Escopo de bloco:**
```javascript
if (true) {
  var varNoBloco = "var";
  let letNoBloco = "let";
  const constNoBloco = "const";
}
console.log(varNoBloco);    // funciona?
console.log(letNoBloco);    // funciona?
console.log(constNoBloco);  // funciona?
```

**Teste 2 - Escopo de função:**
Crie uma função que declare variáveis com var, let e const, e tente acessá-las fora da função.

**Teste 3 - Loop:**
```javascript
for (var i = 0; i < 3; i++) { }
for (let j = 0; j < 3; j++) { }
console.log(i); // funciona?
console.log(j); // funciona?
```

### Exercício 1.14 - Hoisting
Teste o comportamento de hoisting com os seguintes códigos:

**Teste 1 - Variáveis:**
```javascript
console.log(a); // undefined ou erro?
var a = 5;

console.log(b); // undefined ou erro?
let b = 10;

console.log(c); // undefined ou erro?
const c = 15;
```

**Teste 2 - Funções:**
```javascript
testeDeclaration(); // funciona?
function testeDeclaration() {
  console.log("Declaração");
}

testeExpression(); // funciona?
const testeExpression = function() {
  console.log("Expressão");
};
```

Anote qual funciona e qual gera erro, e entenda por quê.
