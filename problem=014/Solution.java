// There are two solutions.
// One uses cached answers upto 1e7
// One does not
// As you might have guessed, cached is much faster!
//
// The variable names are a bit mathematical
final class Solution {

	// This is cached solution
	private static final int CACHE_LIMIT = (int) 1e7;
	private static final int[] cache = new int[CACHE_LIMIT];

	private static final int gc(long n) {
		final int in = (int) n;
		if (n < CACHE_LIMIT && cache[in] != 0) {
			return cache[in];
		}
		if (n == 1) {
			return 1;
		}
		final int ans = n % 2 == 0 ? 1 + gc(n / 2) : 1 + gc(3 * n + 1);
		if (n < CACHE_LIMIT) {
			cache[in] = ans;
		}
		return ans;
	}

	// This is non cached solution
	private static final int g(long n) {
		if (n == 1) {
			return 1;
		}
		return n % 2 == 0 ? 1 + g(n / 2) : 1 + g(3 * n + 1);
	}

	private static long solve(long n) {
		// Time stamping both of them!
		long gcStartTime = System.currentTimeMillis();
		int max = Integer.MIN_VALUE;
		long iMax = Long.MIN_VALUE;
		for (long i = n; i > 0; i--) {
			final int gi = gc(i);
			if (gi >= max) {
				max = gi;
				iMax = i;
			}
		}
		long gcEndTime = System.currentTimeMillis();

		long gStartTime = System.currentTimeMillis();
		max = Integer.MIN_VALUE;
		for (long i = n; i > 0; i--) {
			final int gi = g(i);
			if (gi >= max) {
				max = gi;
				iMax = i;
			}
		}
		long gEndTime = System.currentTimeMillis();

		System.out.println("gc: " + (gcEndTime - gcStartTime) + "ms");
		System.out.println("g : " + (gEndTime - gStartTime) + "ms");
		return iMax;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve((long) 1e6));
	}
}

// If this solution helped you, please star the repo!