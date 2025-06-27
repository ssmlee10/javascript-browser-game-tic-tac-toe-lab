/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

const squareIndex = squareEls.indexOf(board);

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const squareEls = document.querySelectorAll('.sqr');


/*-------------------------------- Functions --------------------------------*/
function init() {
    board = [ 
        '', '', '', 
        '', '', '', 
        '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
}
init();

function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    board.forEach((turn, i) => {
        squareEls[i].textContent = turn;
        if (turn === 'X') {
            squareEls[i].textContent = '🥐';
        } else if (turn === 'O') {
            squareEls[i].textContent = '☕️';
        } else {
            squareEls[i].textContent = '';
        }
    });
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn}'s turn`;
  } else if (!winner && tie) {
    messageEl.textContent = `It's a tie!`;
  } else {
    messageEl.textContent = `${winner} wins!!`;
  }
}

function handleClick(event) {

}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(squareEls => {
    squareEls.addEventListener('click', (handleClick) => {
        console.log('hello');
    });

});

// for (let i=0; i>length; i++) {
//     squareEls.addEventListener('click'), () => {
//         handleClick();
//     }
// }