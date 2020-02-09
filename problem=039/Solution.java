final class Solution {

	private static final boolean formsATriangle(final int a, final int b, final int c) {
		return a + b > c && a + c > b && b + c > a;
	}

	private static final boolean isPythagoreanTriplet(final int a, final int b, final int c) {
		return a * a + b * b == c * c;
	}

	private static final int solveFor(final int p) {
		int count = 0;
		for (int a = 1; a < p / 3; a++) {
			for (int b = 1; b < p / 2; b++) {
				final int c = p - (a + b);
				if (formsATriangle(a, b, c) && isPythagoreanTriplet(a, b, c)) {
					count++;
				}
			}
		}
		return count;
	}

	private static int solve(final int p) {
		int max = Integer.MIN_VALUE, maxP = -1;
		for (int i = 3; i <= p; i++) {
			final int ai = solveFor(i);
			if (ai >= max) {
				max = ai;
				maxP = i;
			}
		}
		return maxP;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(1000));
	}
}

// If this solution helped you, please star the repo!