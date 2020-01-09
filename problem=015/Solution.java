
final class Solution {

	private static long solve(int n) {
		final int nodes = (n + 1);
		final long[][] dp = new long[nodes][nodes];

		for (int i = 1; i < nodes; i++) {
			dp[i][0] = 1;
			dp[0][i] = 1;
		}

		for (int i = 1; i < nodes; i++) {
			for (int j = 1; j < nodes; j++) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			}
		}

		return dp[nodes - 1][nodes - 1];
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(2));
		System.out.println(solve(20));
	}
}

// If this solution helped you, please star the repo!