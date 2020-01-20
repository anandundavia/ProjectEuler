const findCycleLength = (numerator, denominator) => {
	const seen = {};
	let position = 0;
	while (numerator != 0 && seen[numerator] === undefined) {
		seen[numerator] = position++;
		let times = 0;
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
	return position - seen[numerator];
};

const solve = d => {
	let max = Number.MIN_SAFE_INTEGER;
	let answer = -1;
	for (let i = 2; i < d; i++) {
		let cycle = findCycleLength(1, i);
		if (cycle > max) {
			max = cycle;
			answer = i;
		}
	}
	return answer;
};

console.log(solve(10));
console.log(solve(1000));

// If this solution helped you, please star the repo!
