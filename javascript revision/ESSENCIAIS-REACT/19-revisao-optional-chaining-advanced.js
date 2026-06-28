// 🔴 PRIORIDADE ALTA
// Ordem na lista de essenciais: 19
// Exercício original: 05-es6-features/exercicio-05-31.js

// Exercício 5.31 - Optional Chaining em Diferentes Contextos
// Use `?.` para:
// - Acessar propriedades aninhadas
// - Chamar métodos que podem não existir
// - Acessar elementos de array que podem ser undefined

// ========================================
// 🎯 CENÁRIO 1: API de E-commerce (muito comum em React!)
// ========================================
const pedido = {
    id: 101,
    cliente: {
        nome: "Carlos",
        email: "carlos@email.com",
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            // complemento não existe!
        }
    },
    itens: [
        { nome: "Notebook", preco: 3000 },
        { nome: "Mouse", preco: 50 }
    ],
    // rastreamento não existe!
};


console.log("=== CENÁRIO 1: E-commerce ===");
// ✅ TAREFA: Acesse com segurança (sem causar erros):
// 1. O complemento do endereço (não existe)
// 2. O código de rastreamento (não existe)
// 3. O CEP do endereço (não existe)

// Escreva aqui: (limpo para revisão)
pedido.cliente?.endereco?.coplemento
pedido.cliente?.rastreamento?.codigo
pedido.cliente?.rastreamento?.cep




// ========================================
// 🎯 CENÁRIO 2: Chamada de Métodos (callbacks, event handlers)
// ========================================
const formulario = {
    nome: "Cadastro de Usuário",
    validar: function() {
        return "Formulário válido!";
    },
    // onSubmit não existe!
    // onError não existe!
};

console.log("\n=== CENÁRIO 2: Métodos ===");
// ✅ TAREFA: Tente chamar com segurança (sem erro):
// 1. formulario.validar() (existe)
// 2. formulario.onSubmit() (não existe)
// 3. formulario.onError() (não existe)

// Escreva aqui: (limpo para revisão)
formulario.validar?.(); // Basta fazer formulario.validar() // Op. Chaining desnecessário.
formulario.onSubmit?.();
formulario.onError?.();

// ========================================
// 🎯 CENÁRIO 3: Arrays e Objetos Variáveis (listas do React)
// ========================================
const usuarios = [
    { id: 1, nome: "Ana", idade: 25, contato: { telefone: "111-1111" } },
    { id: 2, nome: "Bruno", idade: 30 }, // sem contato!
    null, // usuário inválido!
    { id: 4, nome: "Diana", idade: 22, contato: { telefone: "333-3333" } }
];

console.log("\n=== CENÁRIO 3: Arrays ===");
// ✅ TAREFA: Acesse com segurança:
// 1. O telefone do segundo usuário (não tem contato)
// 2. O nome do terceiro elemento (é null)
// 3. O telefone do quinto elemento (não existe no array)

// Escreva aqui: (limpo para revisão)
console.log(usuarios[1]?.contato?.telefone);
console.log(usuarios[2]?.nome);
console.log(usuarios[4]?.contato?.telefone);


// 💡 EXPLICAÇÃO:
// usuarios[1] existe, mas não tem a propriedade 'contato'
// usuarios[2] é null (por isso precisa do ?.)
// usuarios[4] não existe no array (só vai até índice 3)

/* 
usuarios[0]  // Ana (id: 1)
usuarios[1]  // Bruno (id: 2)
usuarios[2]  // null ← ESTE É NULL!
usuarios[3]  // Diana (id: 4) ← Diana está aqui!
*/

// ========================================
// 🎯 CENÁRIO 4: APIs Externas (fetch, axios no React)
// ========================================
const respostaAPI = {
    sucesso: true,
    dados: {
        usuario: {
            id: 5,
            nome: "Eduardo",
            avatar: "https://avatar.com/eduardo.jpg"
            // perfil não existe!
        }
        // posts não existe!
    }
    // erro não existe!
};

console.log("\n=== CENÁRIO 4: Resposta de API ===");
// ✅ TAREFA: Acesse com segurança:
// 1. A biografia do perfil do usuário (perfil não existe)
// 2. A mensagem de erro (erro não existe)
// 3. O primeiro post do usuário (posts não existe)

// Escreva aqui: (limpo para revisão)
respostaAPI.dados?.usuario?.perfil?.biografia;
respostaAPI?.erro;
respostaAPI?.dados?.posts?.[0];

// ========================================
// 🎯 DESAFIO EXTRA: Combinando ?.  com ?? (Nullish Coalescing)
// ========================================
const produto = {
    nome: "Teclado Mecânico",
    preco: 450,
    // descricao não existe!
    // fabricante não existe!
};

console.log("\n=== DESAFIO EXTRA ===");
// ✅ TAREFA: Use ?. com ?? para fornecer valores padrão:
// 1. Descrição do produto (se não existir, use "Sem descrição")
// 2. Nome do fabricante (se não existir, use "Fabricante desconhecido")
// 3. País de origem (se não existir, use "Brasil")

// Escreva aqui: (limpo para revisão)
produto?.descricao ?? "Sem descrição";
produto?.fabricante ?? "Fabricante desconhecido";
produto?.pais ?? "Brasil";