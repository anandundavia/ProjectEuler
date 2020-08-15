const IHand = require("./IHand");
const ThreeOfAKindHand = require("./ThreeOfAKindHand");

class FullHouse extends IHand {
	get rank() {
		return 7;
	}

	check(playerHand) {
		const appliesThreeOfAKind = ThreeOfAKindHand.check(playerHand);
		if (appliesThreeOfAKind) {
			const remainingValues = playerHand
				.getNumericValues()
				.filter((c) => c !== appliesThreeOfAKind.value);
			if (remainingValues[0] === remainingValues[1]) {
				return {
					applies: true,
					threeOfAKind: appliesThreeOfAKind.value,
					onePair: remainingValues[0],
				};
			}
		}
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: Highest three matching cards wins the pot.
	// In community card games where players have the same three matching cards, the highest value of the two matching cards wins.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		if (playerOneResult.threeOfAKind !== playerTwoResult.threeOfAKind) {
			return playerOneResult.threeOfAKind - playerTwoResult.threeOfAKind;
		}

		if (playerOneResult.onePair !== playerTwoResult.onePair) {
			return playerOneResult.onePair - playerTwoResult.onePair;
		}
		// prettier-ignore
		throw new Error(`Can not resolve FullHouse tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new FullHouse();
