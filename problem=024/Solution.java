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

	private static String solve(int[] arr, int index) {
		while (arr != null && --index > 0) {
			arr = nextPermutation(arr);
		}
		final StringBuilder sb = new StringBuilder();
		for (final int x : arr) {
			sb.append(x);
		}
		return sb.toString();
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(new int[] { 0, 1, 2 }, 1));
		System.out.println(solve(new int[] { 0, 1, 2 }, 2));
		System.out.println(solve(new int[] { 0, 1, 2 }, 3));
		System.out.println(solve(new int[] { 0, 1, 2 }, 4));
		System.out.println(solve(new int[] { 0, 1, 2 }, 5));
		System.out.println(solve(new int[] { 0, 1, 2 }, 6));
		System.out.println(solve(new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }, (int) 1e6));
	}
}

// If this solution helped you, please star the repo!