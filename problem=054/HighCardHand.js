// @ts-check
const IHand = require("./IHand");

class HighCardHand extends IHand {
	get rank() {
		return 1;
	}

	check(playerHand) {
		const values = playerHand.getNumericValues();
		let max = Number.MIN_SAFE_INTEGER;
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			max = Math.max(max, value);
		}
		// A high card always applies
		return { applies: true, value: max };
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: The player holding the highest ranked card wins.
	// If necessary, the second-highest, third-highest, fourth-highest, and fifth-highest cards can be used to break the tie.
	// If all five cards are the same ranks, the pot is split. The suit itself is never used to break a tie in poker.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		if (playerOneResult.value !== playerTwoResult.value) {
			return playerOneResult.value - playerTwoResult.value;
		}
		// prettier-ignore
		throw new Error(`Can not resolve HighCardHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new HighCardHand(); // singleton
