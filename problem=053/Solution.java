import java.math.BigInteger;
import java.util.HashMap;

final class Solution {
	
	private static final BigInteger ONE_MILLION = new BigInteger("1000000");

	private static int solve() {
		int answer = 0;
		for (int r = 0; r < 101; r++) {
			BigInteger previous = BigInteger.ONE; // xCx = 1
			for (int n = r + 1; n < 101; n++) {
				// nCr = (n / (n - r)) * (n - 1)Cr
				BigInteger nCr = previous.multiply(new BigInteger(Integer.toString(n))).divide(new BigInteger(Integer.toString(n - r)));
				if (nCr.compareTo(ONE_MILLION) >= 0) {
					answer++;
				}
				previous = nCr;
			}
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!