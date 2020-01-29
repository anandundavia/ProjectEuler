const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const solve = amount => {
	const dp = Array.from(Array(coins.length), () => new Array(amount + 1));
	for (let i = 0; i < dp[0].length; i++) {
		dp[0][i] = 1;
	}
	for (let i = 1; i < dp.length; i++) {
		for (let j = 0; j < dp[i].length; j++) {
			dp[i][j] = dp[i - 1][j];
			if (coins[i] <= j) {
				dp[i][j] += dp[i][j - coins[i]];
			}
		}
	}
	return dp[coins.length - 1][amount];
};

console.log(solve(200));

// If this solution helped you, please star the repo!
