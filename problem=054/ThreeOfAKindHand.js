// @ts-check
const IHand = require("./IHand");

class ThreeOfAKindHand extends IHand {
	get rank() {
		return 4;
	}

	check(playerHand) {
		const values = playerHand.getNumericValues();
		const freq = {};
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			freq[value] = freq[value] === undefined ? 1 : freq[value] + 1;
			if (freq[value] === 3) {
				return { applies: true, value };
			}
		}
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: Highest ranking three of a kind wins.
	// In community card games where players have the same three of a kind, the highest side card,
	// and if necessary, the second-highest side card wins.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		if (playerOneResult.value !== playerTwoResult.value) {
			return playerOneResult.value - playerTwoResult.value;
		}
		const cmp = (a, b) => b - a;

		const playerOneSideCardValues = playerOneHand
			.getNumericValues()
			.filter((c) => playerOneResult.value !== c)
			.sort(cmp);

		const playerTwoSideCardValues = playerTwoHand
			.getNumericValues()
			.filter((c) => playerTwoResult.value !== c)
			.sort(cmp);

		for (let i = 0; i < playerOneSideCardValues.length; i++) {
			if (playerOneSideCardValues[i] !== playerTwoSideCardValues[i]) {
				return playerOneSideCardValues[i] - playerTwoSideCardValues[i];
			}
		}
		// prettier-ignore
		throw new Error(`Can not resolve ThreeOfAKindHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new ThreeOfAKindHand();
