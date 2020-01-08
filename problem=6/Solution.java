final class Solution {

	private static long solve(long n) {
		return (n * (n * n - 1) * (3 * n + 2)) / 12;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(10));
		System.out.println(solve(100));
	}
}