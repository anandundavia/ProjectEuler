import java.util.Arrays;

final class Solution {

	private static final boolean isPalindrome(final char[] chars) {
		for (int i = 0; i < chars.length / 2; i++) {
			if (chars[i] != chars[chars.length - i - 1]) {
				return false;
			}
		}
		return true;
	}

	private static int solve(int limit) {
		int answer = 0;
		for (int i = 1; i <= limit; i++) {
			final char[] decimal = Integer.toString(i).toCharArray();
			if (isPalindrome(decimal)) {
				final char[] binary = Integer.toString(i, 2).toCharArray();
				if (isPalindrome(binary)) {
					answer += i;
				}
			}

		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve((int) 1e6));
	}
}

// If this solution helped you, please star the repo!