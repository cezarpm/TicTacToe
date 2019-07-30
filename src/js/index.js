let tabuleiro = [];

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
            update(id, tabuleiro, jogador, verifica(tabuleiro, jogador));
            
            
        } else if (event.target.classList.contains('quadrado') && playerTurn == 2) {
            tabuleiro[event.target.id] = computador;
            id = event.target.id
            playerTurn = 1;
            update(id, tabuleiro, computador, verifica(tabuleiro, computador));
           
        }
    }
    
});

function resetar() {
    for (let i = 0; i <= 8; i++) {

        document.getElementById(i).innerHTML = '';
    }
    frase.innerHTML = '';
    podeJogar = true;
    playerTurn = 1;
    tabuleiro = [];
}

function update(id, tabuleiro, val, ganhou) {
    for (let i = 0; i < tabuleiro.length; i++) {
        const element = tabuleiro[i];

        if (element === 'X') {
            document.getElementById(id).innerHTML = val;
        }

        if (element === 'O') {
            document.getElementById(id).innerHTML = val;
        }
    }
    
    if (ganhou) {
        frase.innerHTML = ` Jogador ${ganhou} ganhou o jogo!!`
        podeJogar = false;

    }
}

function verifica(tabuleiro, jogador) {

    let ganhou = '';

    let aux = jogador + jogador + jogador;

    // Verifica as horizontais
    for (let i = 0; i < tabuleiro.length; i++) {
        if(tabuleiro[i] + tabuleiro[i + 1] + tabuleiro[i + 2] == aux ){
            ganhou = aux.substring(0, 1);
        }
    }

    // Verifica as diagonais
    if(tabuleiro[0] + tabuleiro[4] + tabuleiro[8] == aux || tabuleiro[2] + tabuleiro[4] + tabuleiro[6] == aux ){
        ganhou = aux.substring(0, 1);
    }

    // Verifica as verticais
    if(tabuleiro[0] + tabuleiro[3] + tabuleiro[6] == aux || tabuleiro[1] + tabuleiro[4] + tabuleiro[7] == aux || tabuleiro[2] + tabuleiro[5] + tabuleiro[8] == aux ){
        ganhou = aux.substring(0, 1);
    }

    return ganhou;
}