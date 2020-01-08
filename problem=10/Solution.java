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

	private static long solve(int limit) {
		final boolean[] primes = new boolean[limit + 1];
		sieve(primes);
		long sum = 0;
		for (int i = 2; i < primes.length; i++) {
			if (primes[i]) {
				sum += i;
			}
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(10));
		System.out.println(solve((int) 2e6));
	}
}

// If this solution helped you, please star the repo!