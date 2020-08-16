import java.math.BigInteger;

final class Solution {

	private static final int MAX_ITERATIONS = 50;

	private static final BigInteger getNextNumber(BigInteger n) {
		return n.add(new BigInteger(new StringBuffer(n.toString()).reverse().toString()));
	}

	private static final boolean isPalindrome(BigInteger n) {
		final char[] chars = n.toString().toCharArray();
		for (int i = 0 ; i < chars.length; i++) {
			if (chars[i] != chars[chars.length - 1 - i]) {
				return false;
			}
		}
		return true;
	}

	private static final boolean isLychrelNumber(BigInteger n) {
		for (int i = 0; i < MAX_ITERATIONS; i++) {
			n = getNextNumber(n);
			if (isPalindrome(n)) {
				return false;
			}
		}
		return true;
	} 

	private static final boolean isLychrelNumber(int n) {
		return isLychrelNumber(new BigInteger(Integer.toString(n)));
	} 

	private static int solve() {
		int answer = 0;
		for (int i = 0; i < 1e4; i++) {
			if (isLychrelNumber(i)) {
				answer++;
			}
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!