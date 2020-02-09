final class Solution {

	private static final String generate(final int limit) {
		final StringBuilder sb = new StringBuilder();
		int n = 1;
		while (sb.length() < limit) {
			sb.append(n++);
		}
		return sb.toString();
	}

	private static int solve(final int limit) {
		final char[] chars = generate(limit).toCharArray();
		int p = 1;
		int answer = 1;
		while (p <= limit) {
			answer *= (chars[p - 1] - '0');
			p *= 10;
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve((int) 1e6));
	}
}

// If this solution helped you, please star the repo!