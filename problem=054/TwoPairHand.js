// @ts-check
const IHand = require("./IHand");

class TwoPairHand extends IHand {
	get rank() {
		return 3;
	}

	check(playerHand) {
		const values = playerHand.getNumericValues();
		const freq = {};
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			freq[value] = freq[value] === undefined ? 1 : freq[value] + 1;
		}
		const pairs = new Set();
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			if (freq[value] >= 2) {
				pairs.add(value);
			}
			if (pairs.size === 2) {
				return { applies: true, values: Array.from(pairs) };
			}
		}
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: Highest pair wins.
	// If players have the same highest pair, highest second pair wins.
	// If both players have two identical pairs, highest side card wins.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		const cmp = (a, b) => b - a;
		const playerOneHandSorted = playerOneResult.values.sort(cmp);
		const playerTwoHandSorted = playerTwoResult.values.sort(cmp);

		for (let i = 0; i < playerOneHandSorted.length; i++) {
			if (playerOneHandSorted[i] !== playerTwoHandSorted[i]) {
				return playerOneHandSorted[i] - playerTwoHandSorted[i];
			}
		}

		const playerOneSideCardValue = playerOneHand
			.getNumericValues()
			.find((c) => !playerOneResult.values.includes(c));
		const playerTwoSideCardValue = playerTwoHand
			.getNumericValues()
			.find((c) => !playerTwoResult.values.includes(c));

		if (playerOneSideCardValue !== playerTwoSideCardValue) {
			return playerOneSideCardValue - playerTwoSideCardValue;
		}
		// prettier-ignore
		throw new Error(`Can not resolve TwoPairHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new TwoPairHand();
