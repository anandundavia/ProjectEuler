// @ts-check
const fs = require("fs");

const Player = require("./Player");
const PokerGame = require("./PokerGame");

const playerOne = new Player("Player 1");

const playerTwo = new Player("Player 2");

const game = new PokerGame();
game.setPlayerOne(playerOne);
game.setPlayerTwo(playerTwo);

const input = fs.readFileSync("./p054_poker.txt", "utf-8");
const inputForEachGame = input.split("\n");

let playerOneWinCount = 0;
let playerTwoWinCount = 0;

for (let i = 0; i < inputForEachGame.length; i++) {
	const gameInput = inputForEachGame[i];
	const playerOneHandString = gameInput.substring(0, 14);
	const playerTwoHandString = gameInput.substring(15);
	try {
		playerOne.setHandFromString(playerOneHandString);
		playerTwo.setHandFromString(playerTwoHandString);
		const winner = game.play();
		if (winner === playerOne) {
			playerOneWinCount++;
		} else {
			playerTwoWinCount++;
		}
	} catch (e) {
		console.log(`Error for game input: '${gameInput}'`);
		console.log(e);
		process.exit(1);
	}
}

console.log("Total Games:", inputForEachGame.length);
console.log("Player 1 won:", playerOneWinCount);
console.log("Player 2 won:", playerTwoWinCount);
