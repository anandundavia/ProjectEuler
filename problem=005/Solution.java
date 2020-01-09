final class Solution {

	private static final long gcd(long a, long b) {
		while (b != 0) {
			final long t = b;
			b = a % b;
			a = t;
		}
		return a;
	}

	private static final long lcm(long a, long b) {
		return a * b / gcd(a, b);
	}

	private static long solve(long from, long to) {
		long ans = 1;
		for (long i = from; i <= to; i++) {
			ans = lcm(ans, i);
		}
		return ans;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(1, 10));
		System.out.println(solve(1, 20));
	}
}