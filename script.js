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
            if(board[rowIndex][colIndex] === -1 && !col.firstChild) {
                let item = document.createElement('img');
                item.src = 'img/black-pawn.png';
                item.addEventListener('click', () => {
                    moveForward(rowIndex, colIndex);
                });
                col.appendChild(item);
            } else if (board[rowIndex][colIndex] === 1 && !col.firstChild) {
                let item = document.createElement('img');
                item.src = 'img/white-pawn.png';
                // event listener shows coordinates of pawn
                item.addEventListener('click', () => {
                    moveForward(rowIndex, colIndex);
                });
                col.appendChild(item);
            } else if (board[rowIndex][colIndex] === 0 && col.firstChild) {
                col.removeChild(col.firstChild);
            };
            /*const testEle = document.createElement('h1');
            testEle.innerHTML = board[rowIndex][colIndex];
            col.appendChild(testEle);*/
            /*console.log(board[rowIndex][colIndex]);
            console.log(col);*/
        };
    };
};

function moveForward(row, column) {
    console.log(board[row][column]);
    // if statement checks to see if there is a row above it and if the row is empty
    // before entering code
    if(row && board[row - 1][column] === 0) {
        board[row - 1][column] = 1;
        board[row][column] = 0;
        console.log(board);
        showBoard(board);
    };
};

showBoard(board);
