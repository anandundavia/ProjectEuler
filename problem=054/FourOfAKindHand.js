// @ts-check
const IHand = require("./IHand");

class FourOfAKindHand extends IHand {
	get rank() {
		return 8;
	}

	check(playerHand) {
		const values = playerHand.getNumericValues();
		const freq = {};
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			freq[value] = freq[value] === undefined ? 1 : freq[value] + 1;
			if (freq[value] === 4) {
				return { applies: true, value };
			}
		}
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: Highest four of a kind wins.
	// In community card games where players have the same four of a kind, the highest fifth side card ('kicker') wins.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		if (playerOneResult.value !== playerTwoResult.value) {
			return playerOneResult.value - playerTwoResult.value;
		}

		const playerOneSideCardValue = playerOneHand
			.getNumericValues()
			.find((c) => playerOneResult.value !== c);
		const playerTwoSideCardValue = playerTwoHand
			.getNumericValues()
			.find((c) => playerTwoResult.value !== c);

		if (playerOneSideCardValue !== playerTwoSideCardValue) {
			return playerOneSideCardValue - playerTwoSideCardValue;
		}

		// prettier-ignore
		throw new Error(`Can not resolve FourOfAKindHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new FourOfAKindHand();
