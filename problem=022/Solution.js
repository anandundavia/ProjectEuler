const fs = require("fs");

const solve = file => {
	const ip = fs.readFileSync(file, "utf8");
	const names = ip.split(",").sort();
	let totalScore = 0;
	for (let i = 0; i < names.length; i++) {
		const aName = names[i];
		const chars = aName.split("");
		let score = 0;
		for (let j = 1; j < chars.length - 1; j++) {
			score += chars[j].codePointAt() - 64;
		}
		score *= i + 1;
		totalScore += score;
	}
	return totalScore;
};

console.log(solve("./p022_names.txt"));

// If this solution helped you, please star the repo!
