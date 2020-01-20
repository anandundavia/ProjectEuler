import java.util.HashMap;

final class Solution {
	private static final int findCycleLength(int numerator, final int denominator) {
		final HashMap<Integer, Integer> seen = new HashMap<>();
		int position = 0;
		while (numerator != 0 && !seen.containsKey(numerator)) {
			seen.put(numerator, position++);
			int times = 0;
			while (numerator < denominator) {
				numerator *= 10;
				times++;
				if (times > 1) {
					position++;
				}
			}
			numerator %= denominator;
		}
		if (numerator == 0) {
			return -1;
		}
		return position - seen.get(numerator);
	}

	private static int solve(final int d) {
		int max = Integer.MIN_VALUE;
		int answer = -1;
		for (int i = 2; i < d; i++) {
			final int cycle = findCycleLength(1, i);
			if (cycle > max) {
				max = cycle;
				answer = i;
			}
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(10));
		System.out.println(solve(1000));
	}
}

// If this solution helped you, please star the repo!