const caixaPrincipal= document.querySelector('.caixa-principal');
const caixaPeguntas= document.querySelector(".caixa-peguntas")
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector("caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const= perguntas {

    enunciado: "Quantos litros de sangue uma pessoa tem?",
        alternativas: [
            "Tem entre 2 a 4 litros de sangue",
            "Tem entre 4 a 6 litros de sangue"
        ],
        correta: 1 // A primeira alternativa é a correta
    },
    {
        enunciado: "De quem é a famosa frase? Penso, logo existo",
        alternativas: [
            "Descartes",
            "Platão"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "De onde é a invenção do cuveiro elétrico?",
        alternativas: [
            "Inglaterra",
            "Brasil"
        ],
        correta: 0
    },
    {
        enunciado: "Quais o menor e maior país do mundo?",
        alternativas: [
            "São marino e Índia",
            "Vaticano e Rússia"
        ],
        correta: 0
    },
    {
        enunciado: "Qual livro mais vendido no mundo a seguir á Bíblia?",
        alternativas: [
            "O senhor dos Anéis",
            "Dom Quixote"
        ],
        correta: 0
}





let atual = 0
let perguntaAtual;
let pontuação = 0

function mostrarPegunta(){
    perguntaAtual = pergunta[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.innerHTML = perguntaAtual.enunciado
    

    perguntaAtual.alternativas.forEach (alternativas, index) => {
        const botao = documennt.createElement("button");
        botao.addEventListener("click"), () => verificaResposta(index);
        caixaAlternativas.appendChild(botao);

   
    });

}
function verificaResposta(Seleciona){
    if(selecionad == perguntaAtual.correta){
        pontuação++;
    }
    atual++;
    if (atual < perguntas.length){
       mostarPergunta();
    }else {
       mostrarResultado();
       
    }
}