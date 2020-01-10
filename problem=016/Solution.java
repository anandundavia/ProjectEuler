import java.math.BigInteger;

final class Solution {

	private static int solve(int exponent) {
		final char chars[] = BigInteger.TWO.pow(exponent).toString(10).toCharArray();
		int sum = 0;
		for (final char c : chars) {
			sum += c - '0';
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(15));
		System.out.println(solve(1000));
	}
}

// If this solution helped you, please star the repo!