// @ts-check

const RoyalFlushHand = require("./RoyalFlushHand");
const StraightFlushHand = require("./StraightFlushHand");
const FourOfAKindHand = require("./FourOfAKindHand");
const FullHouse = require("./FullHouse");
const FlushHand = require("./FlushHand");
const StraightHand = require("./StraightHand");
const ThreeOfAKindHand = require("./ThreeOfAKindHand");
const TwoPairHand = require("./TwoPairHand");
const OnePairHand = require("./OnePairHand");
const HighCardHand = require("./HighCardHand");

class PokerGame {
	constructor() {
		this.rankedHands = [
			RoyalFlushHand,
			StraightFlushHand,
			FourOfAKindHand,
			FullHouse,
			FlushHand,
			StraightHand,
			ThreeOfAKindHand,
			TwoPairHand,
			OnePairHand,
			HighCardHand,
		].sort((a, b) => b.rank - a.rank);
	}

	setPlayerOne(player) {
		this.playerOne = player;
	}
	setPlayerTwo(player) {
		this.playerTwo = player;
	}

	getWinningPlayer() {
		// prettier-ignore
		if (this.playerOne.resolvedHand.rank !== this.playerTwo.resolvedHand.rank) {
			return this.playerOne.resolvedHand.rank > this.playerTwo.resolvedHand.rank ? this.playerOne: this.playerTwo
		}
		const playerOneWins = this.playerOne.resolveTie(this.playerTwo);
		return playerOneWins ? this.playerOne : this.playerTwo;
	}

	play() {
		this.playerOne.resolveHand(this.rankedHands);
		this.playerTwo.resolveHand(this.rankedHands);

		return this.getWinningPlayer();
	}
}

module.exports = PokerGame;
