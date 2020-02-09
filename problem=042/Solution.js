const fs = require("fs");

const isTriangleNumber = n => {
	const d = 1 + 8 * n;
	const sq = Math.sqrt(d);
	if (Math.floor(sq) !== sq) {
		return false;
	}
	return (sq & 1) == 1;
};

const A = "A".charCodeAt(0);

const getWordValue = w =>
	w.split("").reduce((s, c) => {
		s += c.charCodeAt(0) - A + 1;
		return s;
	}, 0);

const solve = () => {
	const words = fs
		.readFileSync("./p042_words.txt", "utf8")
		.split(",")
		.map(x => x.substring(1, x.length - 1));

	return words.reduce((count, aWord) => {
		const n = getWordValue(aWord);
		if (isTriangleNumber(n)) {
			return count + 1;
		}
		return count;
	}, 0);
};

console.log(solve());
