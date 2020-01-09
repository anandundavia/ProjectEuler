const solve = n => {
	const nodes = n + 1;
	const dp = Array.from(Array(nodes), () => new Array(nodes));

	for (let i = 1; i < nodes; i++) {
		dp[i][0] = 1;
		dp[0][i] = 1;
	}

	for (let i = 1; i < nodes; i++) {
		for (let j = 1; j < nodes; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}

	return dp[nodes - 1][nodes - 1];
};

console.log(solve(2));
console.log(solve(20));

// If this solution helped you, please star the repo!
