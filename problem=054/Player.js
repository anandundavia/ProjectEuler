// @ts-check
const PlayerHand = require("./PlayerHand");

class Player {
	constructor(name) {
		this.name = name;
	}

	setHandFromString(string) {
		this.hand = PlayerHand.createFromString(string);
	}

	resolveHand(rankedHands) {
		for (let i = 0; i < rankedHands.length; i++) {
			const hand = rankedHands[i];
			if (hand.check(this.hand)) {
				this.resolvedHand = hand;
				return this.resolvedHand;
			}
		}
	}

	resolveTie(anotherPlayer) {
		return this.resolvedHand.resolveTie(this.hand, anotherPlayer.hand) > 0;
	}
}

module.exports = Player;
