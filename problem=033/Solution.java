final class Solution {

	private static final char CANCELLED = '-';

	private static final int gcd(int a, int b) {
		while (b != 0) {
			final int t = b;
			b = a % b;
			a = t;
		}
		return a;
	}

	private static final int toNumber(final char[] chars) {
		final StringBuilder sb = new StringBuilder();
		for (final char c : chars) {
			if (c != CANCELLED) {
				sb.append(c);
			}
		}
		if (sb.length() == 0) {
			return -1;
		}
		return Integer.parseInt(sb.toString());
	}

	private static final float cancelCommon(int numerator, int denominator) {
		final char[] nChars = Integer.toString(numerator).toCharArray();
		final char[] dChars = Integer.toString(denominator).toCharArray();
		boolean hasCancelled = false;
		for (int i = 0; i < nChars.length; i++) {
			for (int j = 0; j < dChars.length; j++) {
				if (nChars[i] == dChars[j]) {
					nChars[i] = CANCELLED;
					dChars[j] = CANCELLED;
					hasCancelled = true;
					break;
				}
			}
		}
		if (!hasCancelled) {
			return -1;
		}
		numerator = toNumber(nChars);
		denominator = toNumber(dChars);
		if (denominator == 0) {
			return -1;
		}
		return numerator / (float) denominator;
	}

	private static int solve() {
		int n = 1, d = 1;

		for (int numerator = 11; numerator <= 99; numerator++) {
			for (int denominator = numerator + 1; denominator <= 99; denominator++) {
				final float f = numerator / (float) denominator;
				if (denominator % 10 == 0) {
					continue;
				}
				if (cancelCommon(numerator, denominator) == f) {
					n *= numerator;
					d *= denominator;
				}

			}
		}
		final int gcd = gcd(n, d);
		return d / gcd;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve());
	}
}

// If this solution helped you, please star the repo!