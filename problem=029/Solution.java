import java.util.HashSet;

final class Solution {

	private static int solve(final int ai, final int aj, final int bi, final int bj) {
		final HashSet<Double> seen = new HashSet<>();
		for (int i = ai; i <= aj; i++) {
			for (int j = bi; j <= bj; j++) {
				final double n = Math.pow(i, j);
				seen.add(n);
			}
		}
		return seen.size();
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(2, 5, 2, 5));
		System.out.println(solve(2, 100, 2, 100));
	}
}

// If this solution helped you, please star the repo!