import java.math.BigInteger;

final class Solution {

	private static final BigInteger factorial(BigInteger b) {
		if (b.equals(BigInteger.ONE)) {
			return BigInteger.ONE;
		}
		return b.multiply(factorial(b.subtract(BigInteger.ONE)));
	}

	private static int solve(int n) {
		final BigInteger fact = factorial(new BigInteger(Integer.toString(n)));
		final char[] chars = fact.toString(10).toCharArray();
		int sum = 0;
		for (final char c : chars) {
			sum += (c - '0');
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(10));
		System.out.println(solve(100));
	}
}

// If this solution helped you, please star the repo!