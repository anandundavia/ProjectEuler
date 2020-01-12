const nonLeapYearDays = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = year => (year % 100 == 0 ? year % 400 == 0 : year % 4 == 0);

const solve = (startYear, endYear) => {
	let date = 2; // 1 Monday, 2 Tuesday ... 7 Sunday.
	// The problem description incorrectly says 1st Jan 1901 is Monday.
	// It was a Tuesday.
	// See: https://en.wikipedia.org/wiki/January_1901#January_1,_1901_(Tuesday)
	let count = 0;
	for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
		const addOneDay = isLeapYear(currentYear);
		if (addOneDay) {
			nonLeapYearDays[1] = 29;
		} else {
			nonLeapYearDays[1] = 28;
		}
		for (let i = 0; i < nonLeapYearDays.length; i++) {
			if (date % 7 == 0) {
				count++;
			}
			date += nonLeapYearDays[i];
		}
	}
	return count;
};

console.log(solve(1901, 2000));

// If this solution helped you, please star the repo!
