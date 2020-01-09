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

	private static int solve() {
		final long limit = 600851475143L;
		final int l = (int) Math.sqrt(limit);
		final boolean[] primes = new boolean[l + 1];

		sieve(primes);

		for (int i = primes.length - 1; i >= 0; i--) {
			if (primes[i] && limit % i == 0) {
				return i;
			}
		}

		return -1;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}