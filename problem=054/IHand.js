// @ts-check
class IHand {
	constructor() {
		if (this.constructor.name === "IHand") {
			throw new Error(
				"can not initialize an instance of  abstract class IHand"
			);
		}
	}

	get rank() {
		return Number.MIN_SAFE_INTEGER;
	}

	// takes an instance of PlayerHand
	check(playerHand) {
		throw new Error("implement `check` method");
	}

	resolveTie(oneResult, anotherResult) {
		throw new Error("implement `resolveTie` method");
	}
}

module.exports = IHand;
