// @ts-check

const IHand = require("./IHand");

class FlushHand extends IHand {
	get rank() {
		return 6;
	}

	check(playerHand) {
		const suits = playerHand.getSuits();
		let previousSuit = null;
		for (let i = 0; i < suits.length; i++) {
			const suit = suits[i];
			if (!previousSuit) {
				previousSuit = suit;
			} else {
				if (suit !== previousSuit) {
					return;
				}
			}
		}

		return { applies: true, value: previousSuit };
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: The player holding the highest ranked card wins.
	// If necessary, the second-highest, third-highest, fourth-highest, and fifth-highest cards can be used to break the tie.
	// If all five cards are the same ranks, the pot is split. The suit itself is never used to break a tie in poker.
	resolveTie(playerOneHand, playerTwoHand) {
		const cmp = (a, b) => b - a;
		const playerOneCardValues = playerOneHand.getNumericValues().sort(cmp);
		const playerTwoCardValues = playerTwoHand.getNumericValues().sort(cmp);

		for (let i = 0; i < playerOneCardValues.length; i++) {
			if (playerOneCardValues[i] !== playerTwoCardValues[i]) {
				return playerOneCardValues[i] - playerTwoCardValues[i];
			}
		}
		// prettier-ignore
		throw new Error(`Can not resolve FlushHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new FlushHand();
