// @ts-check
const IHand = require("./IHand");

class StraightHand extends IHand {
	get rank() {
		return 5;
	}

	check(playerHand) {
		const values = playerHand.getNumericValues().sort((a, b) => a - b);
		let previousValue = null;
		let startsAt = null;
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			if (!previousValue) {
				previousValue = value;
				startsAt = value;
			} else {
				if (previousValue + 1 !== value) {
					return;
				}
				previousValue = value;
			}
		}
		return { applies: true, startsAt };
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: Highest ranking card at the top of the sequence wins.
	// Note: The Ace may be used at the top or bottom of the sequence, and is the only card which can act in this manner.
	// A,K,Q,J,T is the highest (Ace high) straight; 5,4,3,2,A is the lowest (Five high) straight.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		if (playerOneResult.startsAt !== playerTwoResult.startsAt) {
			return playerOneResult.startsAt - playerTwoResult.startsAt;
		}
		// prettier-ignore
		throw new Error(`Can not resolve StraightHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new StraightHand();
