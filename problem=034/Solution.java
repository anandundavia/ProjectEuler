import java.util.Arrays;
import java.util.HashMap;

final class Solution {

	private static final long[] factorials = new long[11];

	static {
		factorials[0] = 1;
		factorials[1] = 1;
		for (int i = 2; i < factorials.length; i++) {
			factorials[i] = i * factorials[i - 1];
		}
	}

	private static final boolean satisfies(final int n) {
		final char[] chars = Integer.toString(n).toCharArray();
		long sum = 0;
		for (final char c : chars) {
			sum += factorials[c - '0'];
			if (sum > n) {
				return false;
			}
		}
		return sum == n;
	}

	private static long solve() {
		long answer = 0;
		for (int i = 3; i < 1e6; i++) {
			if (satisfies(i)) {
				answer += i;
			}
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!