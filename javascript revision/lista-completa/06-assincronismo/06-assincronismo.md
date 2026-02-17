# 06 - Programação Assíncrona

## Callbacks

### Exercício 6.1 - Callbacks Básicos
Crie uma função que simule operação assíncrona usando `setTimeout` e execute um callback quando completar.

### Exercício 6.2 - Callbacks com Erro
Implemente o padrão error-first callback (erro como primeiro parâmetro) em funções assíncronas.

### Exercício 6.3 - Callback Hell
Crie uma sequência de 3-4 operações assíncronas aninhadas usando callbacks e observe o "callback hell".

## Promises

### Exercício 6.4 - Criando Promises
Crie Promises do zero usando o constructor `new Promise()`:
- Promise que resolve com sucesso
- Promise que rejeita com erro
- Promise que resolve após um tempo

### Exercício 6.5 - Then e Catch
Use `.then()` e `.catch()` para:
- Tratar sucesso de uma Promise
- Tratar erro de uma Promise
- Encadear múltiplos `.then()`

### Exercício 6.6 - Finally
Use `.finally()` para executar código independente de sucesso ou falha da Promise.

### Exercício 6.7 - Chaining de Promises
Refatore o exercício 6.3 (callback hell) usando Promises encadeadas.

### Exercício 6.8 - Transformação de Dados
Crie uma cadeia de Promises onde cada `.then()` transforma os dados para o próximo na cadeia.

### Exercício 6.9 - Error Handling em Chains
Pratique tratamento de erros em cadeias de Promises:
- Onde colocar `.catch()`
- Como erros se propagam
- Recuperação de erros

## Promise Static Methods

### Exercício 6.10 - Promise.all
Use `Promise.all()` para:
- Executar múltiplas Promises em paralelo
- Processar resultados quando todas completarem
- Lidar com falha de qualquer uma delas

### Exercício 6.11 - Promise.allSettled
Use `Promise.allSettled()` para executar múltiplas Promises e obter todos os resultados (sucesso e falha).

### Exercício 6.12 - Promise.race
Use `Promise.race()` para:
- Implementar timeout em operações
- Pegar o resultado da Promise mais rápida

### Exercício 6.13 - Promise.any
Use `Promise.any()` para obter a primeira Promise que resolver com sucesso.

## Async/Await

### Exercício 6.14 - Funções Async Básicas
Converta funções que retornam Promises para usar `async/await`:
- Declare funções com `async`
- Use `await` para esperar Promises
- Compare a legibilidade com `.then()`

### Exercício 6.15 - Try/Catch com Async/Await
Implemente tratamento de erros usando `try/catch` em funções async.

### Exercício 6.16 - Sequencial vs Paralelo
Compare execução sequencial e paralela:
- Use `await` múltiplas vezes (sequencial)
- Use `Promise.all()` com `await` (paralelo)
- Meça o tempo de execução de ambos

### Exercício 6.17 - Async em Loops
Pratique usar `async/await` dentro de loops:
- For loop com await
- ForEach com async (problema comum)
- Como usar `Promise.all()` com map

### Exercício 6.18 - Refatoração Completa
Refatore o código dos exercícios 6.3 e 6.7 usando `async/await`.

## Fetch API

### Exercício 6.19 - Fetch Básico
Use `fetch()` para fazer requisições HTTP:
- GET request simples
- Processar resposta JSON
- Tratar erros de rede

### Exercício 6.20 - Fetch com Async/Await
Reescreva o exercício anterior usando `async/await` ao invés de `.then()`.

### Exercício 6.21 - POST Request
Use `fetch()` para enviar dados:
- Configure método, headers e body
- Envie JSON
- Processe a resposta

### Exercício 6.22 - Tratamento de Erros HTTP
Implemente tratamento robusto de erros:
- Verifique `response.ok`
- Trate diferentes códigos de status
- Diferencie erros de rede de erros HTTP

### Exercício 6.23 - Headers e Configuração
Configure requisições com:
- Headers customizados (Authorization, Content-Type)
- Diferentes métodos (GET, POST, PUT, DELETE)
- Query parameters na URL

## Padrões Assíncronos

### Exercício 6.24 - Loading State
Implemente um padrão de loading state:
- Variável de estado (simulada)
- Inicie como `loading: true`
- Alterne para `false` após operação
- Use `finally` para garantir que sempre muda

### Exercício 6.25 - Retry Logic
Implemente uma função que retente operações falhadas:
- Tente até N vezes
- Use delay entre tentativas
- Desista após máximo de tentativas

### Exercício 6.26 - Timeout Wrapper
Crie uma função que adiciona timeout a qualquer Promise:
- Receba Promise e tempo limite
- Rejeite se exceder o tempo
- Use `Promise.race()`

### Exercício 6.27 - Debounce Async
Implemente debounce para operações assíncronas (útil para busca enquanto digita).

### Exercício 6.28 - Queue de Promises
Implemente uma fila que processa Promises sequencialmente:
- Adiciona Promises à fila
- Processa uma de cada vez
- Mantém ordem

## Padrões de Carregamento de Dados

### Exercício 6.29 - Fetch com Cache
Implemente cache simples para requisições:
- Armazene resultados
- Verifique cache antes de fazer nova requisição
- Implemente estratégia de invalidação

### Exercício 6.30 - Prefetching
Implemente prefetching de dados:
- Carregue dados antecipadamente
- Armazene para uso futuro
- Trate race conditions

### Exercício 6.31 - Polling
Implemente polling (consultar API periodicamente):
- Use `setInterval` com async/await
- Implemente forma de parar o polling
- Trate erros sem interromper o polling

### Exercício 6.32 - Request Cancellation
Implemente cancelamento de requisições usando `AbortController`:
- Crie AbortController
- Passe signal para fetch
- Cancele quando necessário

## Desafios Práticos

### Exercício 6.33 - Sistema de Login
Simule fluxo de login completo:
- POST de credenciais
- Armazene token de resposta
- Use token em requisições subsequentes
- Trate erros de autenticação

### Exercício 6.34 - Infinite Scroll
Implemente lógica de infinite scroll:
- Carregue página inicial de dados
- Carregue próxima página quando necessário
- Previna múltiplos carregamentos simultâneos
- Trate fim dos dados

### Exercício 6.35 - Search com Debounce
Implemente busca que:
- Faça requisição enquanto usuário digita
- Use debounce para não fazer muitas requisições
- Cancele requisições antigas se nova busca iniciar
- Mostre loading state

### Exercício 6.36 - Batch Requests
Implemente sistema que:
- Acumule múltiplas requisições
- Execute em batch após intervalo
- Otimize número de chamadas à API

### Exercício 6.37 - Error Boundary Async
Crie wrapper para funções async que:
- Capture todos os erros
- Registre em log
- Mostre mensagem amigável
- Permita retry

### Exercício 6.38 - Data Fetching Hook (Simulado)
Simule um hook de data fetching (padrão React) que retorne:
- `data`: dados carregados
- `loading`: estado de carregamento
- `error`: erro se houver
- `refetch`: função para recarregar
