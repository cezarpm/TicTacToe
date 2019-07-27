let tabuleiro = [];

const winCombos = [
    // Win Combos Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Win Combos Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Win Combos angulo(esquecikkkj)
    [0, 4, 8],
    [2, 4, 6],
];

const jogador = 'X'
const computador = 'O'

let playerTurn = 1;
const frase = document.querySelector('.frase');

document.querySelector('#botao-id').addEventListener('click', resetar);

document.addEventListener('click', event => {
    if (event.target.classList.contains('quadrado') && playerTurn == 1) {
        tabuleiro[event.target.id] = event.target.id;
        update(tabuleiro, jogador);
        verifica()
    }
});

function resetar() {
    update(tabuleiro, '')
    tabuleiro = [];
    playerTurn = 1;
}

function update(tabuleiro, val) {
    tabuleiro.forEach(id => {
        let quadrado = document.getElementById(`${id}`);
        quadrado.innerHTML = val;
    })
}

function verifica() {
    let vitoria = null;

    // winCombos.forEach( e => {
    //     const sequencia = [tabuleiro[e[0]], tabuleiro[e[1]], tabuleiro[e[2]]];

    //     if( tabuleiro.every( index => index.innerText === sequencia[0].innerText && index.innerText !== '')) console.log(sequencia);
    // })

    return vitoria;
}
