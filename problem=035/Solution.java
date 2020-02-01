import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

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

	private static final int rotate(int[] arr) {
		final int first = arr[0];
		for (int i = 0; i < arr.length - 1; i++) {
			arr[i] = arr[i + 1];
		}
		arr[arr.length - 1] = first;
		return toNumber(arr);
	}

	private static final int toNumber(int[] arr) {
		final StringBuilder sb = new StringBuilder();
		for (final int i : arr) {
			sb.append(i);
		}
		return Integer.parseInt(sb.toString());
	}

	private static final boolean isCircularPrime(int n, boolean[] primes) {
		final char[] chars = Integer.toString(n).toCharArray();
		int[] arr = new int[chars.length];
		for (int i = 0; i < chars.length; i++) {
			arr[i] = chars[i] - '0';
		}
		for (int i = 0; i < arr.length; i++) {
			final int num = rotate(arr);
			if (!primes[num]) {
				return false;
			}
		}
		return true;
	}

	private static int solve(int limit) {
		int count = 0;
		final boolean[] primes = new boolean[10 * limit + 4];
		sieve(primes);
		for (int i = 2; i <= limit; i++) {
			if (primes[i]) {
				if (isCircularPrime(i, primes)) {
					count++;
				}
			}
		}
		return count;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve((int) 1e2));
		System.out.println(solve((int) 1e6));
	}
}

// If this solution helped you, please star the repo!