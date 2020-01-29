import java.util.HashMap;
import java.util.HashSet;

final class Solution {

	private static final HashSet<Integer> answer = new HashSet<>();
	private static final HashMap<Integer, Integer> cache = new HashMap<>();

	private static final int explore(final int n, final HashSet<Integer> cycle) {
		if (cycle.contains(n)) {
			return -1;
		}
		cycle.add(n);
		if (cache.containsKey(n)) {
			return cache.get(n);
		}
		final int sum = satisfies(n, 5);
		if (sum == n) {
			return n;
		} else {
			cache.put(n, explore(sum, cycle));
			return cache.get(n);
		}
	}

	private static final int satisfies(final int n, final int power) {
		final char[] chars = Integer.toString(n).toCharArray();
		int sum = 0;
		for (final char c : chars) {
			sum += Math.pow((c - '0'), power);
		}
		return sum;
	}

	private static int solve() {
		for (int i = 2; i < 1e7; i++) {
			final int root = explore(i, new HashSet<Integer>());
			if (root > 1) {
				answer.add(root);
			}
		}
		int sum = 0;
		for (final int aRoot : answer) {
			sum += aRoot;
		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!