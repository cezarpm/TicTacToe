let tabuleiro;
geraTabuleiro();

const jogador = 'X'
const computador = 'O'

let podeJogar = true;
let id;
let playerTurn = 1;
const frase = document.querySelector('.frase');
const tabuleiroElement = document.querySelector('#tabuleiro');

document.querySelector('#botao-id').addEventListener('click', resetar);

tabuleiroElement.addEventListener('click', event => {

    if (podeJogar) {

        if (document.getElementById(event.target.id).innerHTML == 'X' || document.getElementById(event.target.id).innerHTML == 'O') {
            return;
        }

        if (event.target.classList.contains('quadrado') && playerTurn == 1) {
            tabuleiro[event.target.id] = jogador;
            id = event.target.id
            playerTurn = 2;
            update(id, tabuleiro, jogador);


        } else if (event.target.classList.contains('quadrado') && playerTurn == 2) {
            tabuleiro[event.target.id] = computador;
            id = event.target.id
            playerTurn = 1;
            update(id, tabuleiro, computador);

        }
    }

});

function geraTabuleiro() {
    tabuleiro = Array(9).fill(null);
}

function resetar() {
    for (let i = 0; i <= 8; i++) {

        document.getElementById(i).innerHTML = '';
    }
    frase.innerHTML = '';
    podeJogar = true;
    playerTurn = 1;
    tabuleiro = [];
    geraTabuleiro();
}

function update(id, tabuleiro, val) {
    for (let i = 0; i < tabuleiro.length; i++) {
        const element = tabuleiro[i];

        if (element === 'X') {
            document.getElementById(id).innerHTML = val;
        }

        if (element === 'O') {
            document.getElementById(id).innerHTML = val;
        }
    }

    let ganhador = verifica(tabuleiro);

    if (ganhador) {
        frase.innerHTML = ` Jogador ${ganhador} ganhou o jogo!!`
        podeJogar = false;

    }
}
function verifica(tabuleiro) {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < linhas.length; i++) {
        const [a, b, c] = linhas[i];
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            return tabuleiro[a];
        }
    }
    return null;
}