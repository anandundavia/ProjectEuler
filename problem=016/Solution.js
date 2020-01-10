// I had to use 12.x version of NodeJS for this.

const solve = exponent =>
	(2n ** BigInt(exponent))
		.toString()
		.split("")
		.map(x => Number.parseInt(x, 10))
		.reduce((s, i) => s + i, 0);

console.log(solve(15));
console.log(solve(1000));

// If this solution helped you, please star the repo!
