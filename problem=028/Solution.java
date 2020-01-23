final class Solution {

	private static long solve(final int p) {
		long n = 1, offset = 2;
		long sum = 0;
		for (int i = 1; n <= p * p; i++) {
			sum += n;
			n += offset;
			if (i % 4 == 0) {
				offset += 2;
			}
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(1001));
	}
}

// If this solution helped you, please star the repo!