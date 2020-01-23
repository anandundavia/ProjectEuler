import java.util.Arrays;

final class Solution {

	private static void sieve(boolean[] primes) {
		Arrays.fill(primes, true);
		for (int i = 2; i < primes.length; i++) {
			if (primes[i]) {
				for (int j = (i << 1); j < primes.length; j += i) {
					primes[j] = false;
				}
			}
		}
	}

	private static final int fn(final int n, final int a, final int b) {
		return n * n + a * n + b;
	}

	private static final boolean isPrime(final int n, final boolean[] primes) {
		if (n <= 1) {
			return false;
		}
		return primes[n];
	}

	private static int countConsecutivePrimes(final int a, final int b, boolean[] primes) {
		int i = 0;
		while (true) {
			final int fi = fn(i++, a, b);
			if (!isPrime(fi, primes)) {
				break;
			}
		}
		return i;
	}

	private static int solve(final int a, final int b) {
		final boolean[] primes = new boolean[2001000 + 2];
		sieve(primes);
		int max = Integer.MIN_VALUE;
		int answer = 0;
		for (int i = -1 * a; i <= a; i++) {
			for (int j = -1 * b; j <= b; j++) {
				final int count = countConsecutivePrimes(i, j, primes);
				if (count >= max) {
					max = count;
					answer = i * j;
				}
			}
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(1000, 1000));
	}
}

// If this solution helped you, please star the repo!