const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        console.log("Rendering gameboard");
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        });
        const gameboardDiv = document.querySelector("#gameboard");
        if (gameboardDiv) {
            gameboardDiv.innerHTML = boardHTML;
        } else {
            console.error("Gameboard element not found!");
        }
    };
    return {
        render,
    };
})();

const createPlayer = (name, mark) => {
    console.log(`Creating player: ${name} with mark ${mark}`);
    return {
        name,
        mark,
    };
};

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    const start = () => {
        console.log("Starting game");
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O"),
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    };
    return {
        start,
    };
})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    console.log("Start button clicked");
    Game.start();
});
