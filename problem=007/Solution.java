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

	private static int solve(int index) {
		final int primesToFind = ((int) (index * (Math.log(index) + Math.log(Math.log(index))))) + 3;
		final boolean[] primes = new boolean[primesToFind];

		sieve(primes);

		for (int i = 2; i < primes.length; i++) {
			if (primes[i]) {
				index--;
				if (index == 0) {
					return i;
				}
			}
		}
		return -1;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(6));
		System.out.println(solve(10001));
	}
}