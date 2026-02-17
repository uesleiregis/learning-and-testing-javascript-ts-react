# 08 - DOM e Eventos

## Seleção de Elementos

### Exercício 8.1 - Query Selectors
Pratique selecionar elementos usando:
- `document.getElementById()`
- `document.querySelector()`
- `document.querySelectorAll()`
- `document.getElementsByClassName()` (compare com querySelector)
- `document.getElementsByTagName()`

### Exercício 8.2 - Seletores CSS Complexos
Use `querySelector` com seletores complexos:
- Classes múltiplas
- Hierarquia (descendentes, filhos diretos)
- Pseudo-classes (`:first-child`, `:nth-child()`)
- Atributos (`[data-id="123"]`)

### Exercício 8.3 - NodeList vs Array
Explore diferenças entre NodeList e Array:
- Converta NodeList para Array
- Métodos disponíveis em cada um
- Quando usar `forEach` vs `map`

## Manipulação de Elementos

### Exercício 8.4 - Conteúdo de Elementos
Pratique modificar conteúdo:
- `textContent` vs `innerHTML` vs `innerText`
- Quando usar cada um
- Riscos de segurança com `innerHTML`

### Exercício 8.5 - Criação de Elementos
Crie elementos dinamicamente:
- `document.createElement()`
- Configure propriedades e conteúdo
- Use `appendChild()`, `append()`, `prepend()`
- Use `insertBefore()`, `insertAdjacentElement()`

### Exercício 8.6 - Remoção de Elementos
Remova elementos do DOM:
- `element.remove()`
- `parent.removeChild()`
- Diferenças entre os métodos

### Exercício 8.7 - Clonagem de Elementos
Clone elementos usando `cloneNode()`:
- Clone superficial vs profundo
- Eventos são clonados?
- Quando usar clonagem

## Atributos e Propriedades

### Exercício 8.8 - Atributos HTML
Manipule atributos:
- `getAttribute()`, `setAttribute()`, `removeAttribute()`
- `hasAttribute()`
- Atributos booleanos (checked, disabled)

### Exercício 8.9 - Data Attributes
Use data attributes:
- Crie elementos com `data-*` attributes
- Acesse via `dataset`
- Use para armazenar metadados

### Exercício 8.10 - Classes CSS
Manipule classes:
- `classList.add()`, `.remove()`, `.toggle()`
- `classList.contains()`
- `className` vs `classList`

### Exercício 8.11 - Estilos Inline
Manipule estilos diretamente:
- `element.style.property`
- Propriedades CSS em camelCase
- `cssText` para múltiplas propriedades

## Navegação no DOM

### Exercício 8.12 - Navegação entre Nós
Navegue pela árvore do DOM:
- `parentElement`, `parentNode`
- `children`, `childNodes`
- `firstElementChild`, `lastElementChild`
- `nextElementSibling`, `previousElementSibling`

### Exercício 8.13 - Closest e Matches
Use métodos de busca relativa:
- `element.closest()` para encontrar ancestral
- `element.matches()` para verificar se elemento corresponde a seletor

## Eventos Básicos

### Exercício 8.14 - Event Listeners
Adicione event listeners:
- `addEventListener()` vs `onclick`
- Diferentes tipos de eventos (click, input, submit)
- `removeEventListener()`

### Exercício 8.15 - Event Object
Explore o objeto de evento:
- `event.target` vs `event.currentTarget`
- `event.type`
- Métodos úteis do evento

### Exercício 8.16 - Múltiplos Listeners
Adicione múltiplos listeners:
- Ao mesmo elemento para mesmo evento
- Ao mesmo elemento para eventos diferentes
- Ordem de execução

## Event Propagation

### Exercício 8.17 - Bubbling
Explore event bubbling:
- Eventos que sobem pela árvore
- `event.stopPropagation()`
- Quando usar ou evitar

### Exercício 8.18 - Capturing
Use fase de capturing:
- Terceiro parâmetro de `addEventListener`
- Diferença entre capturing e bubbling
- Ordem de execução

### Exercício 8.19 - Event Delegation
Implemente event delegation:
- Adicione listener ao pai
- Use `event.target` para identificar elemento clicado
- Vantagens de delegation

### Exercício 8.20 - Prevent Default
Use `preventDefault()`:
- Prevenir submit de form
- Prevenir navegação de link
- Quando é apropriado usar

## Eventos de Formulário

### Exercício 8.21 - Submit e Validação
Capture submit de formulário:
- Previna submit
- Valide campos
- Mostre mensagens de erro
- Envie dados se válido

### Exercício 8.22 - Input Events
Trabalhe com eventos de input:
- `input` vs `change`
- Validação em tempo real
- Debounce de inputs

### Exercício 8.23 - Focus e Blur
Use eventos de foco:
- Highlight campos ativos
- Validação ao perder foco
- Gestão de foco programática

### Exercício 8.24 - Checkbox e Radio
Manipule checkboxes e radio buttons:
- Obtenha valores selecionados
- Marque/desmarque programaticamente
- Eventos de mudança

## Eventos de Mouse

### Exercício 8.25 - Mouse Events
Trabalhe com eventos de mouse:
- `click`, `dblclick`
- `mouseenter`, `mouseleave` vs `mouseover`, `mouseout`
- `mousedown`, `mouseup`, `mousemove`

### Exercício 8.26 - Coordenadas do Mouse
Obtenha posição do mouse:
- `event.clientX`, `event.clientY`
- `event.pageX`, `event.pageY`
- `event.offsetX`, `event.offsetY`

### Exercício 8.27 - Drag and Drop Básico
Implemente drag and drop simples:
- `mousedown` para iniciar
- `mousemove` para arrastar
- `mouseup` para soltar

## Eventos de Teclado

### Exercício 8.28 - Keyboard Events
Capture eventos de teclado:
- `keydown`, `keyup`, `keypress` (deprecated)
- `event.key` vs `event.code`
- Detectar teclas especiais (Enter, Esc, etc.)

### Exercício 8.29 - Atalhos de Teclado
Implemente atalhos:
- Detectar combinações (Ctrl+S, Alt+N)
- `event.ctrlKey`, `event.shiftKey`, `event.altKey`
- Prevenir ações padrão

### Exercício 8.30 - Navegação com Teclado
Implemente navegação acessível:
- Tab entre elementos
- Arrow keys para navegar lista
- Enter/Space para ativar

## Custom Events

### Exercício 8.31 - Criar Custom Events
Crie e dispatche eventos customizados:
- `new CustomEvent()`
- `element.dispatchEvent()`
- Passar dados com `detail`

### Exercício 8.32 - Event Bus Simples
Implemente event bus para comunicação entre componentes:
- Objeto central de eventos
- Subscribe a eventos
- Publish eventos
- Unsubscribe

## Performance e Boas Práticas

### Exercício 8.33 - Debounce e Throttle
Implemente funções utilitárias:
- Debounce para limitar execuções
- Throttle para controlar frequência
- Use em scroll, resize, input

### Exercício 8.34 - Passive Listeners
Explore passive event listeners:
- Adicione listener com `{ passive: true }`
- Entenda quando usar
- Impacto em performance

### Exercício 8.35 - Remover Listeners
Pratique limpeza de listeners:
- Remova ao destruir componente
- Use AbortController para múltiplos listeners
- Previna memory leaks

## Desafios Práticos

### Exercício 8.36 - Todo List Interativa
Crie uma lista de tarefas com:
- Adicionar item via formulário
- Marcar como concluído (toggle)
- Remover item
- Filtrar (todos/ativos/concluídos)

### Exercício 8.37 - Modal/Dialog
Implemente modal customizado:
- Abrir ao clicar botão
- Fechar ao clicar fora ou em X
- Trap focus dentro do modal
- Fechar com tecla Esc

### Exercício 8.38 - Dropdown Menu
Crie dropdown que:
- Abre ao clicar
- Fecha ao clicar fora
- Navega com teclado (arrow keys)
- Fecha com Esc

### Exercício 8.39 - Accordion
Implemente accordion component:
- Múltiplas seções expansíveis
- Apenas uma aberta por vez
- Toggle seção ativa
- Animação suave (CSS)

### Exercício 8.40 - Infinite Scroll
Implemente infinite scroll:
- Detecte quando usuário chegou ao fim
- Carregue mais items
- Mostre loading indicator
- Use Intersection Observer API

### Exercício 8.41 - Formulário Multi-Step
Crie formulário de múltiplas etapas:
- Navegue entre steps
- Valide cada step
- Armazene dados entre steps
- Mostre progresso

### Exercício 8.42 - Search com Autocomplete
Implemente busca com sugestões:
- Input com debounce
- Mostre sugestões em dropdown
- Navegue sugestões com teclado
- Selecione com Enter ou click

### Exercício 8.43 - Image Gallery
Crie galeria de imagens:
- Grid de thumbnails
- Modal ao clicar (lightbox)
- Navegação entre imagens (anterior/próximo)
- Fechar com Esc ou click fora

### Exercício 8.44 - Sortable List
Implemente lista ordenável:
- Drag and drop para reordenar
- Visual feedback durante drag
- Atualize ordem no array
- Persista ordem (localStorage)

### Exercício 8.45 - Dark Mode Toggle
Implemente toggle de tema:
- Botão para alternar
- Aplique classes ao body/root
- Persista preferência
- Respeite preferência do sistema (media query)
