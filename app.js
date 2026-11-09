
// ==========================================
// MÓDULO 1: INTRODUÇÃO AO DOM
// ==========================================

// Selecionando os elementos
const titulo = document.getElementById("titulo-principal");
const paragrafo = document.getElementById("paragrafo-boas-vindas");
const botaoAlterar = document.getElementById("btn-alterar-texto");

// Lendo o conteúdo atual
console.log("Título atual:", titulo.textContent);
console.log("Parágrafo atual:", paragrafo.textContent);

// Evento de clique
botaoAlterar.addEventListener("click", function() {

    titulo.textContent = "DOM Manipulado com Sucesso!";

    paragrafo.textContent = "Parabéns! Você conseguiu manipular o conteúdo da página utilizando JavaScript e DOM.";

});


// ==========================================
// MÓDULO 2: EVENTOS E CALCULADORA
// ==========================================

// Selecionando os elementos
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const botaoSomar = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado-soma");

// Evento de clique para realizar a soma
botaoSomar.addEventListener("click", function() {

    // Capturando os valores dos inputs
    const numero1 = parseFloat(valor1.value);
    const numero2 = parseFloat(valor2.value);

    // Realizando a soma
    const soma = numero1 + numero2;

    // Exibindo o resultado
    resultado.textContent = soma;

});

 // ==========================================
// MÓDULO 3: CRIAÇÃO E REMOÇÃO DINÂMICA
// ==========================================

// Selecionando os elementos do HTML
const botaoCriarAviso = document.getElementById("btn-criar-aviso");
const containerAvisos = document.getElementById("container-avisos");

// Evento de clique no botão
botaoCriarAviso.addEventListener("click", function() {

    // Criando uma nova div
    const novoAviso = document.createElement("div");

    // Adicionando a classe ao aviso
    novoAviso.classList.add("aviso-item");

    // Criando o texto do aviso
    const textoAviso = document.createElement("span");
    textoAviso.textContent = "Atenção! Novo aviso criado com sucesso!";

    // Criando o botão de fechar
    const botaoFechar = document.createElement("button");
    botaoFechar.textContent = "X";

    // Adicionando o texto e o botão dentro da div
    novoAviso.appendChild(textoAviso);
    novoAviso.appendChild(botaoFechar);

    // Inserindo o aviso dentro do container
    containerAvisos.appendChild(novoAviso);

    // Evento para fechar e remover o aviso
    botaoFechar.addEventListener("click", function() {

        novoAviso.remove();

    });

});

// ==========================================
// MÓDULO 4: CLASSES E ESTILOS
// ==========================================

// Selecionando os elementos do HTML
const botaoTema = document.getElementById("btn-toggle-tema");
const modulo4 = document.getElementById("modulo-4");

// Adicionando evento de clique
botaoTema.addEventListener("click", function() {

    // Alternando a classe dark-theme
    modulo4.classList.toggle("dark-theme");

});

// ==========================================
// MÓDULO 5: SELEÇÃO E ALTERAÇÃO DE CORES
// ==========================================

// Selecionando todas as células com a classe situacao
const celulasSituacao = document.getElementsByClassName("situacao");

// Percorrendo a coleção utilizando for...of
for (const celula of celulasSituacao) {

    // Verificando o texto da célula
    if (celula.textContent.trim() === "Concluído") {

        // Aplicando a cor verde
        celula.style.color = "#22c55e";

    } else if (celula.textContent.trim() === "Pendente") {

        // Aplicando a cor vermelha
        celula.style.color = "#ef4444";

    }

}

// ==========================================
// MÓDULO 6: DELEGAÇÃO DE EVENTOS
// ==========================================

// Selecionando os elementos do HTML
const painelBotoes = document.getElementById("painel-botoes");
const logBotao = document.getElementById("log-botao");

// Adicionando um único evento ao elemento pai
painelBotoes.addEventListener("click", function(e) {

    // Verificando se o elemento clicado é um botão
    if (e.target.nodeName === "BUTTON") {

        // Exibindo o ID do botão clicado
        logBotao.textContent = e.target.id;

        // Também podemos exibir o texto do botão
        console.log("Botão clicado:", e.target.textContent);

    }

});

// ==========================================
// MÓDULO 7: ATRIBUTOS E DATASET
// ==========================================

// Selecionando os elementos HTML
const caixaDestaque = document.getElementById("caixa-destaque");
const botaoPrioridadeAlta = document.getElementById("btn-prioridade-alta");
const botaoPrioridadeBaixa = document.getElementById("btn-prioridade-baixa");
const botaoLimparAtributo = document.getElementById("btn-limpar-atributo");
const infoAtributo = document.getElementById("info-atributo");

// Função para atualizar o estado do atributo
function atualizarInfo() {

    const prioridade = caixaDestaque.getAttribute("data-prioridade");

    infoAtributo.textContent = prioridade || "Nenhum";

}

// a) Aplicar prioridade alta
botaoPrioridadeAlta.addEventListener("click", function() {

    caixaDestaque.setAttribute("data-prioridade", "alta");

    atualizarInfo();

});

// b) Aplicar prioridade baixa
botaoPrioridadeBaixa.addEventListener("click", function() {

    caixaDestaque.setAttribute("data-prioridade", "baixa");

    atualizarInfo();

});

// c) Remover atributo de prioridade
botaoLimparAtributo.addEventListener("click", function() {

    caixaDestaque.removeAttribute("data-prioridade");

    atualizarInfo();

});

// ==========================================
// MÓDULO 8: ARRAYS E RENDERIZAÇÃO DINÂMICA
// ==========================================

// a) Criando um array global para armazenar as tarefas
const tarefas = [];

// Selecionando os elementos HTML
const formTarefa = document.getElementById("form-tarefa");
const inputTarefa = document.getElementById("input-tarefa-titulo");
const listaTarefas = document.getElementById("lista-tarefas");

// b) Função para renderizar as tarefas na tela
function render() {

    // Limpando a lista visual
    listaTarefas.innerHTML = "";

    // Percorrendo o array de tarefas
    tarefas.forEach(function(tarefa) {

        // Criando um elemento li
        const item = document.createElement("li");

        // Inserindo o título da tarefa
        item.textContent = tarefa.titulo;

        // Adicionando o item na lista
        listaTarefas.appendChild(item);

    });

}

// c) Escutador de submissão do formulário
formTarefa.addEventListener("submit", function(event) {

    // Impedindo o recarregamento da página
    event.preventDefault();

    // Capturando o título digitado
    const titulo = inputTarefa.value.trim();

    // Verificando se o campo não está vazio
    if (titulo === "") {
        alert("Digite o título de uma tarefa!");
        return;
    }

    // Adicionando um novo objeto ao array
    tarefas.push({
        titulo: titulo
    });

    // Atualizando a lista na tela
    render();

    // Limpando o campo de texto
    inputTarefa.value = "";

});
