final class Solution {

	private static boolean isPalindrome(int n) {
		final char chars[] = Integer.toString(n).toCharArray();
		for (int i = 0; i < chars.length / 2; i++) {
			if (chars[i] != chars[chars.length - 1 - i]) {
				return false;
			}
		}
		return true;
	}

	// Brute-forcing the SHIT OUTTA this problem
	private static int solve() {
		final int max = 999;
		int ans = Integer.MIN_VALUE;
		for (int i = max; i >= 0; i--) {
			for (int j = max; j >= 0; j--) {
				if (isPalindrome(i * j)) {
					ans = Math.max(ans, i * j);
				}
			}
		}
		return ans;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}