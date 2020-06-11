const player = (name, tile) => {
    const getName = () => name;
    const getTile = () => tile;

    return {getName, getTile};
};

const game = (function() {
    "use strict"

    let _player1;
    let _player2;
    let _currentPlayer;
    let _board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    function switchPlayer() {
        if (_currentPlayer === _player1) {
            _currentPlayer = _player2;
        }
        else {
            _currentPlayer = _player1;
        }
    }

    function markBoard(row, column) {
        let square = _board[row][column];
        if (square.innerHTML === "") {
            square.innerHTML = _currentPlayer.getTile();
            switchPlayer();
        }
    }

    function initialize() {
        _player1 = player("Bob", "X");
        _player2 = player("Alice", "O");
        _currentPlayer = _player1;

        let squares = Array.from(document.querySelectorAll(".boardSquare"));
        for (let row = 0; row < _board.length; ++row) {
            for (let col = 0; col < _board[0].length; ++col) {
                let square = squares.shift();
                square.addEventListener("click", function() {
                    markBoard(row, col);
                });
                _board[row][col] = square;
            }
        }
    }

    return {initialize};
})();

let displayController = (function() {
    /* TODO; implement me! */
})();

game.initialize();
