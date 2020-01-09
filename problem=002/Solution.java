final class Solution {

	private static int find() {
		final int limit = (int) 4e6; // 4M
		int sum = 0;
		int a0 = 0, a1 = 1, an = -1; // initial Fibonacci values
		while (an < limit) {
			an = a0 + a1;

			if ((an & 1) == 0) {
				sum += an;
			}

			a0 = a1;
			a1 = an;
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(find());
	}
}