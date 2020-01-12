final class Solution {

	private static final int d(int n) {
		final int limit = (int) Math.sqrt(n);
		int sum = 0;
		for (int i = 1; i <= limit; i++) {
			if (n % i == 0) {
				sum += i;
				if (i != 1 && n / i != i) {
					sum += n / i;
				}
			}

		}
		return sum;
	}

	private static int solve(int limit) {
		int sum = 0;
		final boolean[] covered = new boolean[limit + 1];
		for (int i = 1; i <= limit; i++) {
			if (!covered[i]) {
				final int di = d(i);
				if (di != i && d(di) == i) {
					sum += i + di;
					covered[i] = true;
					covered[di] = true;
				}
			}
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(10000));
	}
}

// If this solution helped you, please star the repo!