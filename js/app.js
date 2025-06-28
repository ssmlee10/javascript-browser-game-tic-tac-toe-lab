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



/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const squareEls = document.querySelectorAll('.sqr');
const resetBtnEl = document.querySelector('#reset');

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
    console.log('update message')
    if (winner === false && tie === false) {
        messageEl.textContent = `It's ${turn}'s turn`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = `It's a tie!`;
    } else {
        console.log('winner found')
        messageEl.textContent = `${turn} wins!!`;
    }
}

function handleClick(event) {
    const squareIndex = event.target.id;
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
        return;
    };
    if (winner === true) {
        return;
    };
    placePiece(squareIndex, event.target);
    checkForWinner();
    updateMessage();
    updateBoard();
    switchPlayerTurn();
    // checkForTie();
    console.log(winner);
};

function placePiece(index, square) {
    board[index] = turn;
    square.innerText = turn;
}

function checkForWinner() {
    for(let combo of winningCombos) {
        const [a, b, c] = combo
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            winner = true;
            console.log(winner);
            return;
        }
    }
    if (!board.includes('')) {
        console.log('this is board.includes', board.includes(''))
        console.log('this is !board.includes', !board.includes(''))
        tie = true;
    }
}
// Got help from Glenn during office hours on checkForWinner function :)

function switchPlayerTurn() {
    // turn = turn === 'X' ? 'O' : 'X'
    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
    console.log(turn);
}

// function checkForTie(i) {
//     if(winner === true){
//         return;
//     } else if(board[i] === '') {
//         tie = false;
//     } else {
//         tie = true;
//     }
//     console.log(tie);
// }
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(squareEl => {
    squareEl.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);