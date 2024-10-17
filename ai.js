// IMPORTS
import { board, outerBoard } from './script.js';

const lostMoves = [];
let possibleMoves = [];

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
    evalMoves(move);
};

// adds possible moves to the possibleMoves array
function analyzeMove(row, column) {
    if(board[row + 1][column] === 0) possibleMoves.push(`F${row}${column}`);
    if(board[row + 1][column - 1] === 1) possibleMoves.push(`TL${row}${column}`);
    if(board[row + 1][column + 1] === 1) possibleMoves.push(`TR${row}${column}`);
};

function selectRandom(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
};

function evalMoves(move) {
    console.log(move);
    if(move[0] === 'F') AIMove(Number(move[1]), Number(move[2]));
};

function AIMove(row, column) {
    board[row + 1][column] = -1;
    board[row][column] = 0;
    console.log(board);
};

export { analyzeAIMoves };