const solve = (ai, aj, bi, bj) => {
	const seen = {};
	for (let i = ai; i <= aj; i++) {
		for (let j = bi; j <= bj; j++) {
			const n = BigInt(i) ** BigInt(j);
			seen[n] = true;
		}
	}
	return Object.keys(seen).length;
};

console.log(solve(2, 5, 2, 5));
console.log(solve(2, 100, 2, 100));

// If this solution helped you, please star the repo!
