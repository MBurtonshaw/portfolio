/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById("btn__reset");

//Event listener for start button
startButton.addEventListener("click", () => {
    game = new Game();
    game.resetGame();
    game.startGame();
});

const screenKeys = document.querySelectorAll(".key");

//Event listener for clicking onscreen keyboard
screenKeys.forEach(letter => {
    letter.addEventListener("click", e => {
        game.handleInteraction(e.target);
    });
});

//Event listener for physical keyboard
document.addEventListener("keydown", e => {
    if (event.keyCode > 64 && event.keyCode < 91) {
        for (let i = 0; i < screenKeys.length; i++) {
            if (screenKeys[i].textContent === event.key) {
                game.handleInteraction(screenKeys[i]);
            }
        }
    }
});
