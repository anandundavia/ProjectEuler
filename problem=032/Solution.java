import java.util.HashSet;

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

	private static final long getNumber(int[] arr, int left, int right) {
		final StringBuilder sb = new StringBuilder();
		for (int i = left; i <= right; i++) {
			sb.append(arr[i]);
		}
		return Long.parseLong(sb.toString());
	}

	private static final HashSet<Long> seen = new HashSet<>();

	private static final long calculate(int[] arr) {
		long count = 0;
		for (int i = 0; i < arr.length - 2; i++) {
			long multiplicand = getNumber(arr, 0, i);
			for (int j = i + 1; j < arr.length - 1; j++) {
				long multiplier = getNumber(arr, i + 1, j);
				long product = getNumber(arr, j + 1, arr.length - 1);
				if (multiplicand * multiplier == product) {
					if (!seen.contains(product)) {
						System.out.println(product);
						count += product;
						seen.add(product);
					}
				}
			}
		}
		return count;
	}

	private static long solve() {
		int[] arr = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
		long answer = 0;
		while (arr != null) {
			answer += calculate(arr);
			arr = nextPermutation(arr);
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!