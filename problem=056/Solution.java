import java.math.BigInteger;


final class Solution {

	private static final int getDigitSumOfAToThePowerB(int a, int b) {
		final char[] chars = new BigInteger(Integer.toString(a)).pow(b).toString().toCharArray();
		int sum = 0;
		for (final char c : chars) {
			sum += (c - '0');
		}
		return sum;
	}

	private static int solve() {
		int answer = Integer.MIN_VALUE;
		for (int i = 1; i < 100; i++) {
			for (int j = 1; j < 100; j++) {
				int sum = getDigitSumOfAToThePowerB(i, j);
				answer = Math.max(answer, sum);
			}
		}

		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!