import java.util.Arrays;

final class Solution {

	private static final int[] coins = new int[] { 1, 2, 5, 10, 20, 50, 100, 200 };

	private static int solve(int amount) {
		final int dp[][] = new int[coins.length][amount + 1];
		for (int i = 0; i < dp[0].length; i++) {
			dp[0][i] = 1;
		}
		for (int i = 1; i < dp.length; i++) {
			for (int j = 0; j < dp[i].length; j++) {
				dp[i][j] = dp[i - 1][j];
				if (coins[i] <= j) {
					dp[i][j] += dp[i][j - coins[i]];
				}
			}
		}
		return dp[coins.length - 1][amount];
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(200));
	}
}

// If this solution helped you, please star the repo!