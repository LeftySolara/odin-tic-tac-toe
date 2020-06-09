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
    let _board = [];

    function switchPlayer() {
        if (_currentPlayer === _player1) {
            _currentPlayer = _player2;
        }
        else {
            _currentPlayer = _player1;
        }
    }

    function initialize() {
        _player1 = player("Bob", "X");
        _player2 = player("Alice", "O");
        _currentPlayer = _player1;

        let squares = document.querySelectorAll(".boardSquare");
        squares.forEach(square => {
            square.addEventListener("click", function() {
                square.innerHTML = _currentPlayer.getTile();
                switchPlayer();
            })
            _board.push(square);
        });
    }

    return {initialize};
})();

let displayController = (function() {
    /* TODO; implement me! */
})();

game.initialize();