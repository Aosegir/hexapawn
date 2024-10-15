let board = [
    [-1, -1, -1],
    [0, 0, 0],
    [1, 1, 1]
];
let outerBoard = document.getElementById('outer-board');

function playGame() {
    // user will make moves until they win or are defeated by the 'ai'
};

function showBoard(board) {
    // transform rows into array to get key-value pairs from entries
    for(const [rowIndex, row] of [...outerBoard.children].entries()) {
        // transform columns into array to get key-value pairs from entries
        for(const [colIndex, col] of [...row.children].entries()) {
            if(board[rowIndex][colIndex] === -1) {
                if(col.firstChild) {
                    col.removeChild(col.firstChild);
                };
                let item = document.createElement('img');
                item.src = 'img/black-pawn.png';
                col.appendChild(item);
            } else if (board[rowIndex][colIndex] === 1) {
                if(col.firstChild) {
                    col.removeChild(col.firstChild);
                };
                let item = document.createElement('img');
                item.src = 'img/white-pawn.png';
                // event listener shows coordinates of pawn
                item.addEventListener('click', () => {
                    // showMoves is called here
                    showMoves(rowIndex, colIndex);
                });
                col.appendChild(item);
            } else if (board[rowIndex][colIndex] === 0 && col.firstChild) {
                col.removeChild(col.firstChild);
            };
        };
    };
};


function showMoves(row, column) {
    // calls clearMoves function to remove colors and event listeners
    clearMoves();
    // if the spot in front of it doesnt have a pawn, highlight it for move
    if(row && board[row - 1][column] === 0) {
        let newRow = ([...outerBoard.children][row - 1]);
        let newSpace = ([...newRow.children][column]);
        newSpace.style.backgroundColor = "yellow";
        newSpace.addEventListener('click', moveForward);
        console.log("Move forward available");
    };
    // if the spot to the left/right does have a pawn, highlight it for attack
    if(row && board[row - 1][column - 1] === -1) {
        let newRow = ([...outerBoard.children][row - 1]);
        let newSpace = ([...newRow.children][column - 1]);
        newSpace.style.backgroundColor = "yellow";
        newSpace.addEventListener('click', takePawnLeft);
        console.log("Attack left available");
    }
    if (row && board[row - 1][column + 1] === -1) {
        let newRow = ([...outerBoard.children][row - 1]);
        let newSpace = ([...newRow.children][column + 1]);
        newSpace.style.backgroundColor = "yellow";
        newSpace.addEventListener('click', takePawnRight);
        console.log("Attack right available");
    }
};

/*function sayHello() {
    console.log("Heyo");
    this.removeEventListener('click', sayHello);
    this.style.backgroundColor = 'transparent';
};*/

function clearMoves() {
    // hopefully clearing all moveForward anonymous functions
    for(const [rowIndex, row] of [...outerBoard.children].entries()) {
        for(const [colIndex, col] of [...row.children].entries()) {
            col.removeEventListener('click', moveForward);
            col.removeEventListener('click', takePawnLeft);
            col.removeEventListener('click', takePawnRight);
            col.style.backgroundColor = "transparent";
        };
    };
};

function moveForward() {
    // coordinates of current square found using this and loop
    for(const [rowIndex, row] of [...outerBoard.children].entries()) {
        for(const [colIndex, col] of [...row.children].entries()) {
            if(col === this) {
                board[rowIndex][colIndex] = 1;
                board[rowIndex + 1][colIndex] = 0;
                console.log(board);
                clearMoves();
                showBoard(board);
            };
        };
    }; 
};

function takePawnLeft() {
    for(const [rowIndex, row] of [...outerBoard.children].entries()) {
        for(const [colIndex, col] of [...row.children].entries()) {
            if(col === this) {
                board[rowIndex][colIndex] = 1;
                board[rowIndex + 1][colIndex + 1] = 0;
                console.log(board);
                clearMoves();
                showBoard(board);
            };
        };
    }; 
};

function takePawnRight() {
    for(const [rowIndex, row] of [...outerBoard.children].entries()) {
        for(const [colIndex, col] of [...row.children].entries()) {
            if(col === this) {
                board[rowIndex][colIndex] = 1;
                board[rowIndex + 1][colIndex - 1] = 0;
                console.log(board);
                clearMoves();
                showBoard(board);
            };
        };
    }; 
};

showBoard(board);
