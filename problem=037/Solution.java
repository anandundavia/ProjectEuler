import java.util.Arrays;

final class Solution {

	private static void sieve(boolean[] primes) {
		Arrays.fill(primes, true);
		primes[0] = false;
		primes[1] = false;
		for (int i = 2; i < primes.length; i++) {
			if (primes[i]) {
				for (int j = (i << 1); j < primes.length; j += i) {
					primes[j] = false;
				}
			}
		}
	}

	private static final boolean isTruncatablePrimeRightToLeft(int n, boolean[] primes) {
		while (n > 1) {
			if (!primes[n]) {
				return false;
			}
			n /= 10;
		}
		if (n == 1) {
			return false;
		}
		return true;
	}

	private static final int toNumber(final char[] chars) {
		return Integer.parseInt(new String(chars));
	}

	private static final boolean isTruncatablePrimeLeftToRight(int n, boolean[] primes) {
		final char[] chars = Integer.toString(n).toCharArray();
		for (int i = 0; i < chars.length - 1; i++) {
			chars[i] = '0';
			final int t = toNumber(chars);
			if (!primes[t]) {
				return false;
			}
		}
		return true;
	}

	private static int solve(final int limit) {
		int sum = 0;
		final boolean[] primes = new boolean[limit + 1];
		sieve(primes);
		for (int i = 10; i <= limit; i++) {
			final boolean shouldCount = primes[i] && isTruncatablePrimeRightToLeft(i, primes)
					&& isTruncatablePrimeLeftToRight(i, primes);

			if (shouldCount) {
				sum += i;
			}

		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve((int) 1e7));
	}
}

// If this solution helped you, please star the repo!