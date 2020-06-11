const player = (name, tile) => {

    let marks = {
        row: [0, 0, 0],
        column: [0, 0, 0],
        diag: 0,
        antidiag: 0,
    }

    const getName = () => name;
    const getTile = () => tile;

    return {marks, getName, getTile};
};

const gameBoard = (function() {
    "use strict"

    let _board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    let _currentSymbol;

    function setSymbol(symbol) {
        _currentSymbol = symbol;
    }

    function checkForWin(row, column, marks) {
        let boardSize = _board[0].length;
        marks.row[row]++;
        marks.column[column]++;
        if (row === column) {
            marks.diag++;
        }
        if (row + column === boardSize -1) {
            marks.antidiag++;
        }

        if (marks.row[row] === boardSize
            || marks.column[column] === boardSize
            || marks.diag === boardSize
            || marks.antidiag === boardSize)
            return true;

        return false;
    }

    function markBoard(row, column) {
        let square = _board[row][column];
        if (square.innerHTML === "") {
            square.innerHTML = _currentSymbol;
        }
    }

    function initialize(turnFunc) {
        let squares = Array.from(document.querySelectorAll(".boardSquare"));
        for (let row = 0; row < _board.length; ++row) {
            for (let col = 0; col < _board[0].length; ++col) {
                let square = squares.shift();
                square.addEventListener("click", function() {
                    turnFunc(row, col);
                });
                _board[row][col] = square;
            }
        }
    }

    return {setSymbol, checkForWin, markBoard, initialize};
})();

const game = (function() {
    "use strict"

    let _player1;
    let _player2;
    let _currentPlayer;

    function _switchPlayer() {
        if (_currentPlayer === _player1) {
            _currentPlayer = _player2;
        }
        else {
            _currentPlayer = _player1;
        }
        gameBoard.setSymbol(_currentPlayer.getTile());
    }

    function performTurn(row, column) {
        gameBoard.markBoard(row, column);
        if (gameBoard.checkForWin(row, column, _currentPlayer.marks)) {
            alert(`${_currentPlayer.getName()} wins!`);
        }
        _switchPlayer();
    }

    function initialize() {
        _player1 = player("Bob", "X");
        _player2 = player("Alice", "O");
        _currentPlayer = _player1;

        gameBoard.initialize(performTurn);
        gameBoard.setSymbol(_currentPlayer.getTile());
    }

    return {initialize};
})();

let displayController = (function() {
    /* TODO; implement me! */
})();

game.initialize();
