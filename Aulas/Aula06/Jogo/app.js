//pontuacao dos jogadores
var pontuacao = [0, 0];
//pontuacao da rodada atual
var pontuacaoRodada = 0;
//jogador atual
var jogadorAtual = 0;
var dado = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#pontuacao-rodada-1').textContent = dado;
var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarAVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');
var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];
var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];

function zerarJogo() {
    pontuacaoRodada0 = 0;
    pontuacaoRodada1 = 0;
    pontuacaoGlobal0 = 0;
    pontuacaoGlobal1 = 0;
    pontuacao[0] = 0;
    pontuacao[1] = 0;
    pontuacoesRodadas[1].textContent = "";
    pontuacoesRodadas[0].textContent = "";
    pontuacoesGlobais[1].textContent = "";
    pontuacoesGlobais[0].textContent = "";

    jogadorAtual = Math.floor(Math.random() * 2);
}

function showModal() {
    var winner = ""
    $("#myModal").on("show.bs.modal", function(event) {
        if (jogadorAtual == 1) {
            winner = "Jogador 1 venceu!"
        } else {
            winner = "Jogador 2 venceu"
        }
        $(this).find(".modal-title").text(winner);
    })
    $("#myModal").modal('show');
    zerarJogo()
}

botaoLancarDado.addEventListener("click", function() {
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado == 1) {
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = 0;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        showModal()
    } else {
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesRodadas[jogadorAtual].textContent = dado;
    }
})
botaoPassarAVez.addEventListener("click", function() {
    jogadorAtual = 1 - jogadorAtual;
})
botaoNovoJogo.addEventListener("click", function() {
    zerarJogo()
})