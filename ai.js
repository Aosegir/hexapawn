// IMPORTS
import { board, outerBoard, showBoard, gameOver } from './script.js';

const lostMoves = [];
let possibleMoves = [];
let lastMove = '';

/*
    STARTING FUNCTION - LOOK FOR POSSIBLE MOVES AMONG ALL PIECES
*/
function analyzeAIMoves() {
    possibleMoves = [];
    for(const [rowIndex, row] of [...outerBoard.children].entries()) {
        for(const [colIndex, col] of [...row.children].entries()) {
            if(board[rowIndex][colIndex] === -1)
                analyzeMove(rowIndex, colIndex);
        };
    };
    console.log(possibleMoves);
    let move = selectRandom(possibleMoves);
    if(move) evalMoves(move);
};

/*
    POPULATE ARRAY WITH POSSIBLE MOVES
*/
function analyzeMove(row, column) {
    if(board[row + 1][column] === 0) possibleMoves.push(`F${row}${column}`);
    if(board[row + 1][column - 1] === 1) possibleMoves.push(`TL${row}${column}`);
    if(board[row + 1][column + 1] === 1) possibleMoves.push(`TR${row}${column}`);
};

/*
    SELECT RANDOM MOVE FROM POPULATED ARRAY
*/
function selectRandom(arr) {
    if(arr.length) {
        let random = arr[Math.floor(Math.random() * arr.length)];
        lastMove = random;
        return random;
    } else {
        console.log("You did it! The AI has no legal moves. You win!");
        //gameOver = true;
    };
};

/*
    EXECUTE APPROPRIATE FUNCTION FOR RANDOM MOVE
*/
function evalMoves(move) {
    console.log(move);
    if(move[0] === 'F') {
        AIMove(Number(move[1]), Number(move[2]));
        showBoard(board);
    } else if(move[0] === 'T') {
        if(move[1] === 'L') {
            AITakeLeft(Number(move[2]), Number(move[3]));
            showBoard(board);
        } else if (move[1] === 'R') {
            AITakeRight(Number(move[2]), Number(move[3]));
            showBoard(board);
        };
    };
};

/*
    AI HEXAPAWN MOVE FUNCTIONS
*/
function AIMove(row, column) {
    board[row + 1][column] = -1;
    board[row][column] = 0;
};

function AITakeLeft(row, column) {
    board[row + 1][column - 1] = -1;
    board[row][column] = 0;
};

function AITakeRight(row, column) {
    board[row + 1][column + 1] = -1;
    board[row][column] = 0;
};

export { analyzeAIMoves };