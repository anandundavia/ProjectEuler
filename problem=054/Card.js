// @ts-check
class Card {
	// Numeric values, good for comparing Jack, Queen, King, Ace
	static get VALUE_MAP() {
		return {
			T: 10,
			J: 11,
			Q: 12,
			K: 13,
			A: 14,
		};
	}

	static createFromString(string) {
		const value = string[0];
		const suit = string[1];
		return new Card(value, suit);
	}

	constructor(value, suit) {
		this.value = value;
		this.suit = suit;
	}

	getNumericValue() {
		const v = Number.parseInt(this.value);
		if (Number.isNaN(v)) {
			if (Card.VALUE_MAP[this.value] === undefined) {
				// prettier-ignore
				throw new Error(`No numeric mapping for '${this.value}' from card ${JSON.stringify(this)}`);
			}
			return Card.VALUE_MAP[this.value];
		}
		return v;
	}

	getSuit() {
		return this.suit;
	}
}

module.exports = Card;
