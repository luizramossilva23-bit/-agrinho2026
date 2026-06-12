let perguntas = [
    {
        pergunta: "Qual energia é renovável?",
        respostas: ["Petróleo", "Solar", "Carvão"],
        correta: 1
    },
    {
        pergunta: "O que ajuda o meio ambiente?",
        respostas: ["Desmatamento", "Reflorestamento", "Poluição"],
        correta: 1
    },
    {
        pergunta: "O agro forte usa tecnologia?",
        respostas: ["Sim", "Não"],
        correta: 0
    },
    {
        pergunta: "Qual ajuda a economia sustentável?",
        respostas: ["Agricultura moderna", "Desperdício"],
        correta: 0
    },
    {
        pergunta: "Água deve ser usada com...",
        respostas: ["Desperdício", "Consciência"],
        correta: 1
    }
];

let atual = 0;
let pontos = 0;

function mostrarPergunta(){

    let p = perguntas[atual];

    document.getElementById("pergunta").innerHTML = p.pergunta;

    let respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = "";

    for(let i = 0; i < p.respostas.length; i++){

        respostasDiv.innerHTML += `
        <button onclick="responder(${i})">
            ${p.respostas[i]}
        </button>
        `;
    }
}

function responder(opcao){

    if(opcao === perguntas[atual].correta){
        pontos++;
        document.getElementById("pontos").innerHTML = pontos;
    }

    atual++;

    if(atual < perguntas.length){
        mostrarPergunta();
    } else {
        document.getElementById("pergunta").innerHTML = "Fim do Quiz!";
        document.getElementById("respostas").innerHTML = "Você fez " + pontos + " pontos 🌱";
    }
}

mostrarPergunta();