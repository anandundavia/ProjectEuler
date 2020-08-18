import java.math.BigInteger;

final class Solution {

	private static final BigInteger TWO = new BigInteger("2");
	private static final BigInteger THREE = new BigInteger("3");

	private static int solve() {
		BigInteger n = BigInteger.ONE, d = TWO;

		int answer = 0;
		for (int i = 0 ; i < 1000; i++) {
			BigInteger nn = d, nd = d.multiply(TWO).add(n), zn = d.multiply(THREE).add(n);

			if (zn.toString().length() > nd.toString().length()) {
				answer++;
			}

			n = nn;
			d = nd;
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!