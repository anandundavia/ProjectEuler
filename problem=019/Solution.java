final class Solution {

	private static final int[] nonLeapYearDays = { 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

	private static final boolean isLeapYear(int year) {
		return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
	}

	private static int solve(final int startYear, final int endYear) {
		int date = 2; // 1 Monday, 2 Tuesday ... 7 Sunday.
		// The problem description incorrectly says 1st Jan 1901 is Monday.
		// It was a Tuesday.
		// See: https://en.wikipedia.org/wiki/January_1901#January_1,_1901_(Tuesday)
		int count = 0;
		for (int currentYear = startYear; currentYear <= endYear; currentYear++) {
			final boolean addOneDay = isLeapYear(currentYear);
			if (addOneDay) {
				nonLeapYearDays[1] = 29;
			} else {
				nonLeapYearDays[1] = 28;
			}
			for (int i = 0; i < nonLeapYearDays.length; i++) {
				if ((date) % 7 == 0) {
					count++;
				}
				date += nonLeapYearDays[i];
			}
		}
		return count;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(1901, 2000));
	}
}

// If this solution helped you, please star the repo!