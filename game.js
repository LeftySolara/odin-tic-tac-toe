const Player = (name, tile) => {
    const getName = () => name;
    const getTile = () => tile;

    return {getName, getTile};
};

let game = (function() {
    /* TODO: implement me! */
})();

let gameBoard = (function() {
    "use strict"

    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
})();

let displayController = (function() {
    /* TODO; implement me! */
})();