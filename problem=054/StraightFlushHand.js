// @ts-check
const IHand = require("./IHand");
const StraightHand = require("./StraightHand");
const FlushHand = require("./FlushHand");

class StraightFlushHand extends IHand {
	get rank() {
		return 9;
	}

	check(playerHand) {
		const appliesStraightHand = StraightHand.check(playerHand);
		const appliesFlushHand = FlushHand.check(playerHand);
		if (appliesStraightHand && appliesFlushHand) {
			return {
				applies: true,
				straightHandStartsAt: appliesStraightHand.startsAt,
				flushHand: appliesFlushHand.value,
			};
		}
	}

	// https://www.pokerstars.in/poker/games/rules/hand-rankings/
	// In the event of a tie: Highest rank at the top of the sequence wins.
	// The best possible straight flush is known as a royal flush, which consists of the ace, king, queen, jack and ten of a suit.
	// A royal flush is an unbeatable hand.
	resolveTie(playerOneHand, playerTwoHand) {
		const playerOneResult = this.check(playerOneHand);
		const playerTwoResult = this.check(playerTwoHand);

		if (
			playerOneResult.straightHandStartsAt !==
			playerTwoResult.straightHandStartsAt
		) {
			return (
				playerOneResult.straightHandStartsAt -
				playerTwoResult.straightHandStartsAt
			);
		}
		// prettier-ignore
		throw new Error(`Can not resolve StraightFlushHand tie for ${JSON.stringify(playerOneHand)} and ${JSON.stringify(playerTwoHand)}`)
	}
}

module.exports = new StraightFlushHand();
