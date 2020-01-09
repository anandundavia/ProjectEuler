final class Solution {

	private static int findSum(final int from, final int to) {
		int sum = 0;
		for (int i = from; i < to; i++) {
			if (i % 3 == 0 || i % 5 == 0) {
				sum += i;
			}
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(findSum(1, 10));
		System.out.println(findSum(1, 1000));
	}
}