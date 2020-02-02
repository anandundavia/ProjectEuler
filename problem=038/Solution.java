final class Solution {

	private static final boolean isPanDigital(final String n) {
		final boolean[] seen = new boolean[10];
		final char[] chars = n.toCharArray();
		for (final char c : chars) {
			seen[c - '0'] = !seen[c - '0'];
		}
		for (int i = 1; i < seen.length; i++) {
			if (!seen[i]) {
				return false;
			}
		}
		return true;
	}

	private static final long solveFor(final long n) {
		final StringBuilder sb = new StringBuilder();
		int i = 1;
		while (sb.length() < 9) {
			sb.append(n * i++);
		}
		if (i > 2 && sb.length() == 9) {
			final String t = sb.toString();
			if (isPanDigital(t)) {
				return Long.parseLong(t);
			}
		}
		return 0L;
	}

	private static long solve() {
		final long limit = 987654321L;
		for (long i = limit; i >= 1; i--) {
			final long xi = solveFor(i);
			if (xi != 0) {
				return xi;
			}
		}
		return 0L;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!