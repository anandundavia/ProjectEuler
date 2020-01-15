import java.math.BigInteger;

final class Solution {

	private static final int getNumberOfDigits(BigInteger n) {
		return n.toString(10).length();
	}

	private static int solve(int numberOfDigits) {
		BigInteger a = BigInteger.ONE, b = BigInteger.ONE, c;
		int index = 2;
		do {
			c = a.add(b);
			index++;
			a = b;
			b = c;
		} while (getNumberOfDigits(c) != numberOfDigits);
		return index;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(2));
		System.out.println(solve(3));
		System.out.println(solve(1000));
	}
}

// If this solution helped you, please star the repo!