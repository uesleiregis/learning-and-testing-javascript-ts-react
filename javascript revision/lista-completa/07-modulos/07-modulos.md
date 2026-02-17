# 07 - Módulos ES6

## Export e Import

### Exercício 7.1 - Named Exports
Crie um arquivo com múltiplas funções e exporte cada uma usando named exports:
- Sintaxe inline (`export function`)
- Sintaxe de lista (`export { func1, func2 }`)

### Exercício 7.2 - Named Imports
Importe as funções do exercício anterior usando diferentes sintaxes:
- Import individual
- Import múltiplo em uma linha
- Import tudo como namespace

### Exercício 7.3 - Default Export
Crie arquivos com default exports:
- Função como default
- Classe como default
- Objeto como default

### Exercício 7.4 - Default Import
Importe os exports padrão do exercício anterior.

### Exercício 7.5 - Combinando Named e Default
Crie um módulo que tenha:
- Um export default
- Múltiplos named exports
Importe ambos em outro arquivo.

## Renomeação e Namespace

### Exercício 7.6 - Import com Alias
Importe módulos renomeando-os usando `as`:
- Renomear para evitar conflitos de nomes
- Renomear para nomes mais curtos

### Exercício 7.7 - Export com Alias
Exporte funções com nomes diferentes usando `as`.

### Exercício 7.8 - Import Namespace
Importe todos os exports de um módulo como um objeto namespace usando `* as`.

### Exercício 7.9 - Re-export
Crie um arquivo "barril" (barrel) que:
- Importe de múltiplos módulos
- Re-exporte tudo em um único ponto de acesso

## Organização de Código

### Exercício 7.10 - Estrutura de Utilitários
Crie uma estrutura de pastas para utilitários:
```
utils/
  ├── string.js (funções de string)
  ├── array.js (funções de array)
  ├── date.js (funções de data)
  └── index.js (barrel file)
```

### Exercício 7.11 - Módulos de Constantes
Crie arquivos separados para:
- Constantes de configuração
- Mensagens de erro
- Rotas/URLs da API
- Temas/cores

### Exercício 7.12 - Separação de Concerns
Organize código de uma funcionalidade em:
- `types.js` - definições de tipos/constantes
- `utils.js` - funções utilitárias
- `api.js` - chamadas de API
- `index.js` - função principal que usa tudo

## Dynamic Imports

### Exercício 7.13 - Import Dinâmico Básico
Use `import()` para carregar módulos dinamicamente (retorna Promise):
- Carregue módulo sob demanda
- Use com `async/await`
- Trate erros de carregamento

### Exercício 7.14 - Code Splitting Simulado
Simule code splitting carregando módulos apenas quando necessário:
- Carregue módulo baseado em condição
- Carregue módulo na interação do usuário
- Implemente loading state

### Exercício 7.15 - Lazy Loading de Features
Implemente lazy loading de funcionalidades:
- Carregue feature pesada apenas quando usada
- Mostre indicador de loading
- Cache o módulo após primeira carga

## Padrões de Módulos

### Exercício 7.16 - Singleton Module
Crie um módulo que funcione como singleton:
- Estado compartilhado
- Métodos para manipular estado
- Sempre retorne a mesma instância

### Exercício 7.17 - Factory Module
Crie um módulo que exporte uma factory function:
- Receba configuração
- Retorne objeto com métodos
- Permita múltiplas instâncias

### Exercício 7.18 - Service Module
Crie um módulo de serviço (ex: API service):
- Configure base URL
- Métodos para diferentes endpoints
- Tratamento centralizado de erros

### Exercício 7.19 - Config Module
Crie módulo de configuração que:
- Exporte constantes de ambiente
- Mude baseado em ENV (dev/prod)
- Centralize todas as configs da app

## Dependências Circulares

### Exercício 7.20 - Identificar Dependência Circular
Crie dois módulos que importam um do outro e observe o problema.

### Exercício 7.21 - Resolver Dependência Circular
Refatore o exercício anterior para eliminar a dependência circular:
- Extraia código comum para terceiro módulo
- Reorganize a estrutura
- Use dependency injection

## Module Patterns para React

### Exercício 7.22 - Componente com Utilitários
Organize um componente em múltiplos arquivos:
```
Button/
  ├── Button.js (componente principal)
  ├── Button.styles.js (estilos)
  ├── Button.utils.js (funções auxiliares)
  └── index.js (export público)
```

### Exercício 7.23 - Feature Module
Organize uma feature completa:
```
Feature/
  ├── components/ (componentes da feature)
  ├── hooks/ (custom hooks)
  ├── utils/ (utilitários específicos)
  ├── api/ (chamadas de API)
  ├── types/ (constantes/tipos)
  └── index.js (ponto de entrada)
```

### Exercício 7.24 - Barrel Exports
Crie barrel files (index.js) para:
- Pasta de componentes
- Pasta de hooks
- Pasta de utils
Simplifique imports em outros arquivos.

### Exercício 7.25 - Path Aliases Simulation
Simule como path aliases funcionariam:
- Use imports relativos complexos
- Imagine como ficariam com aliases (@components, @utils)
- Organize imports de forma consistente

## CommonJS vs ES Modules

### Exercício 7.26 - CommonJS Básico
Pratique sintaxe CommonJS (para entender código legado):
- `module.exports`
- `require()`
- Export de objeto vs função

### Exercício 7.27 - Diferenças Principais
Compare CommonJS e ES Modules:
- Sintaxe
- Quando código é executado
- Tree shaking
- Suporte a imports dinâmicos

## Desafios Práticos

### Exercício 7.28 - Refatoração de Arquivo Grande
Dado um arquivo grande (simule com 500+ linhas), refatore em módulos pequenos:
- Identifique responsabilidades
- Separe em arquivos
- Crie barrel file
- Teste que tudo funciona

### Exercício 7.29 - API Client Modular
Crie um cliente de API modular:
```
api/
  ├── client.js (fetch wrapper)
  ├── endpoints/
  │   ├── users.js
  │   ├── posts.js
  │   └── index.js
  └── index.js
```

### Exercício 7.30 - Plugin System
Implemente sistema de plugins simples:
- Core module que aceita plugins
- Plugins como módulos separados
- Carregue plugins dinamicamente
- Cada plugin adiciona funcionalidade

### Exercício 7.31 - Utils Library
Crie biblioteca de utilitários bem organizada:
- Agrupe por categoria (string, array, object, etc.)
- Teste de cada função em arquivo separado
- Barrel exports para fácil importação
- README documentando o uso

### Exercício 7.32 - Theme Module
Crie sistema de temas modular:
- `themes/light.js`
- `themes/dark.js`
- `themes/index.js` (seletor de tema)
- Função para trocar tema dinamicamente

### Exercício 7.33 - I18n Module
Implemente módulo de internacionalização:
- `locales/pt.js`
- `locales/en.js`
- `i18n.js` (carrega locale atual)
- Função para traduzir chaves

### Exercício 7.34 - Form Validation Library
Crie biblioteca de validação modular:
- `validators/email.js`
- `validators/password.js`
- `validators/required.js`
- `validate.js` (composição de validadores)

### Exercício 7.35 - State Management Simples
Implemente gerenciamento de estado modular:
- `store.js` (estado central)
- `actions.js` (ações)
- `selectors.js` (getters)
- `subscribers.js` (observadores)
