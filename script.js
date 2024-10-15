let board = [
    [-1, -1, -1],
    [0, 0, 0],
    [1, 1, 1]
];

function playGame() {
    // user will make moves until they win or are defeated by the 'ai'
};

function showBoard(board) {
    let outerBoard = document.getElementById('outer-board');
    // transform rows into array to get key-value pairs from entries
    for(const [rowIndex, row] of [...outerBoard.children].entries()) {
        // transform columns into array to get key-value pairs from entries
        for(const [colIndex, col] of [...row.children].entries()) {
            if(board[rowIndex][colIndex] === -1) {
                let item = document.createElement('img');
                item.src = 'img/black-pawn.png';
                col.appendChild(item);
            } else if (board[rowIndex][colIndex] === 1) {
                let item = document.createElement('img');
                item.src = 'img/white-pawn.png';
                col.appendChild(item);
            }
            /*const testEle = document.createElement('h1');
            testEle.innerHTML = board[rowIndex][colIndex];
            col.appendChild(testEle);*/
            /*console.log(board[rowIndex][colIndex]);
            console.log(col);*/
        };
    };
};

showBoard(board);
