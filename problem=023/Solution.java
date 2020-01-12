import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

final class Solution {

	private static final boolean isAbundant(int n) {
		final int limit = (int) Math.sqrt(n);
		int sum = 0;
		for (int i = 1; i <= limit && sum <= n; i++) {
			if (n % i == 0) {
				sum += i;
				if (i != 1 && n / i != i) {
					sum += n / i;
				}
			}
		}
		return sum > n;
	}

	private static final boolean canBeExpressedAsSumOfTwoAbundantNumbers(int n, List<Integer> list) {
		for (final int anAbundantNumber : list) {
			final int counterNumber = n - anAbundantNumber;
			if (Collections.binarySearch(list, counterNumber) >= 0) {
				return true;
			}
		}
		return false;
	}

	private static long solve(int limit) {
		final List<Integer> abundantList = new ArrayList<>(limit);
		for (int i = 1; i <= limit; i++) {
			if (isAbundant(i)) {
				abundantList.add(i);
			}
		}
		long sum = 0;
		for (int i = 1; i <= limit; i++) {
			if (!canBeExpressedAsSumOfTwoAbundantNumbers(i, abundantList)) {
				sum += i;
			}

		}
		return sum;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(28123));
	}
}

// If this solution helped you, please star the repo!