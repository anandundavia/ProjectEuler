// @ts-check
const Card = require("./Card");

class PlayerHand {
	static createFromString(string) {
		this.tokens = string.split(" ");
		const cards = this.tokens.map((aToken) =>
			Card.createFromString(aToken)
		);
		return new PlayerHand(cards);
	}

	constructor(cards) {
		this.cards = cards;
	}

	getNumericValues() {
		return this.cards.map((aCard) => aCard.getNumericValue());
	}

	getSuits() {
		return this.cards.map((aCard) => aCard.getSuit());
	}

	getCardsSorted() {
		return this.cards.sort(
			(a, b) => b.getNumericValue() - a.getNumericValue()
		);
	}
}

module.exports = PlayerHand;
