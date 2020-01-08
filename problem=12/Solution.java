final class Solution {

	private static final int countDivisors(int n) {
		final int lim = (int) Math.sqrt(n);
		int count = 0;
		for (int i = 1; i <= lim; i++) {
			if (n % i == 0) {
				count++;
				if (n / i != i) {
					count++;
				}
			}
		}
		return count;
	}

	private static int solve(int limit) {
		int an = 1, n = 1;
		while (countDivisors(an) < limit) {
			n++;
			an = (n * (n + 1)) / 2;
		}
		return an;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(6));
		System.out.println(solve(501));
	}
}

// If this solution helped you, please star the repo!