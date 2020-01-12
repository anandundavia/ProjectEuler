// Node 12.x

const factorial = b => {
	if (BigInt(b) === 1n) {
		return 1n;
	}
	return BigInt(b) * factorial(BigInt(b) - 1n);
};

const solve = n => {
	const fact = factorial(n);
	return fact
		.toString()
		.split("")
		.map(x => Number.parseInt(x, 10))
		.reduce((s, i) => s + i, 0);
};

console.log(solve(10));
console.log(solve(100));

// If this solution helped you, please star the repo!
