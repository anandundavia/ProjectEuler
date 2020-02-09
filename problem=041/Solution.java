import java.util.Arrays;

final class Solution {

	private static final void swap(final int[] arr, final int i, final int j) {
		final int t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}

	private static final void reverse(final int[] arr, final int start, final int end) {
		final int mid = (start + end) / 2;
		for (int i = start; i < mid; i++) {
			swap(arr, i, end - (i - start) - 1);
		}
	}

	private static final int[] nextPermutation(int[] arr) {
		int i = -1;
		for (int k = 0; k < arr.length - 1; k++) {
			if (arr[k] < arr[k + 1]) {
				i = k;
			}
		}
		// No next permutation exists.
		// In other way, next permutation is the first or initial ordering.
		if (i == -1) {
			return null;
		}
		int j = 0;
		for (int k = 0; k < arr.length; k++) {
			if (arr[i] < arr[k]) {
				j = k;
			}
		}
		swap(arr, i, j);
		reverse(arr, i + 1, arr.length);
		return arr;
	}

	private static final int[] generateDigitArray(final int digit) {
		int[] arr = new int[digit];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = i + 1;
		}
		return arr;
	}

	private static final long toNumber(int[] arr) {
		final StringBuilder sb = new StringBuilder(arr.length);
		for (final int x : arr) {
			sb.append(x);
		}
		return Long.parseLong(sb.toString());
	}

	private static final boolean isPrime(final long n) {
		if ((n & 1) == 0) {
			return false;
		}
		final long limit = (long) Math.sqrt(n);
		for (int i = 3; i <= limit; i += 2) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}

	private static long solve(final int digit) {
		long answer = Long.MIN_VALUE;
		for (int d = digit; d > 1; d--) {
			int[] arr = generateDigitArray(d);
			while (arr != null) {
				final long n = toNumber(arr);
				if (isPrime(n)) {
					answer = Math.max(answer, n);
				}
				arr = nextPermutation(arr);
			}

		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(9));
	}
}

// If this solution helped you, please star the repo!