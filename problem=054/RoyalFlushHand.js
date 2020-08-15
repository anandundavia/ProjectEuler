// @ts-check
const IHand = require("./IHand");
const StraightFlushHand = require("./StraightFlushHand");

class RoyalFlushHand extends IHand {
	get rank() {
		return 10;
	}

	check(playerHand) {
		const appliesStraightFlushHand = StraightFlushHand.check(playerHand);
		if (
			appliesStraightFlushHand &&
			appliesStraightFlushHand.straightHandStartsAt === 10
		) {
			return { applies: true };
		}
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// The best possible straight flush is known as a royal flush, which consists of the ace, king, queen, jack and ten of a suit.
	// A royal flush is an unbeatable hand.
	resolveTie(playerOneHand, playerTwoHand) {
		return 1;
	}
}

module.exports = new RoyalFlushHand();
