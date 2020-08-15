// @ts-check

const IHand = require("./IHand");

class OnePairHand extends IHand {
	get rank() {
		return 2;
	}

	check(playerHand) {
		const values = playerHand.getNumericValues();
		const seen = {};
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			if (seen[value]) {
				return { applies: true, value };
			}
			seen[value] = true;
		}
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: Highest pair wins.
	// If players have the same pair, the highest side card wins,
	// and if necessary, the second-highest and third-highest side card can be used to break the tie.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		if (playerOneResult.value !== playerTwoResult.value) {
			return playerOneResult.value - playerTwoResult.value;
		}

		const playerOneCards = playerOneHand
			.getCardsSorted()
			.filter((c) => c.getNumericValue() !== playerOneResult.value);
		const playerTwoCards = playerTwoHand
			.getCardsSorted()
			.filter((c) => c.getNumericValue() !== playerTwoResult.value);

		for (let i = 0; i < playerOneCards.length; i++) {
			const one = playerOneCards[i];
			const two = playerTwoCards[i];

			if (one.getNumericValue() !== two.getNumericValue()) {
				return one.getNumericValue() - two.getNumericValue();
			}
		}
		// prettier-ignore
		throw new Error(`Can not resolve OnePairHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new OnePairHand(); // singleton
