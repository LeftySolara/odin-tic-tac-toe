const player = (name, tile) => {
    const getName = () => name;
    const getTile = () => tile;

    return {getName, getTile};
};

const gameBoard = (function() {
    "use strict"

    let _board = [];
    let _currentTile = "";

    function setCurrentTile(symbol) {
        _currentTile = symbol;
    }

    function initialize() {
        let squares = document.querySelectorAll(".boardSquare");
        squares.forEach(square => {
            square.addEventListener("click", function() {
                square.innerHTML = _currentTile;
            })
            _board.push(square)
        });
    }

    return {setCurrentTile, initialize}
})();

const game = (function() {
    let _player1;
    let _player2;
    let _currentPlayer;
    let _board = gameBoard;

    function initialize() {
        _player1 = player("Bob", "X");
        _player2 = player("Alice", "O");
        _currentPlayer = _player1;

        _board.initialize();
        _board.setCurrentTile(_currentPlayer.getTile());
    }

    return {initialize};
})();

let displayController = (function() {
    /* TODO; implement me! */
})();

game.initialize();