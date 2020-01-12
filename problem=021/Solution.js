const d = n => {
	const limit = Math.floor(Math.sqrt(n));
	let sum = 0;
	for (let i = 1; i <= limit; i++) {
		if (n % i == 0) {
			sum += i;
			if (i != 1 && n / i != i) {
				sum += n / i;
			}
		}
	}
	return sum;
};

const solve = limit => {
	let sum = 0;
	const covered = new Array(limit + 1);
	for (let i = 1; i <= limit; i++) {
		if (!covered[i]) {
			const di = d(i);
			if (di != i && d(di) == i) {
				sum += i + di;
				covered[i] = true;
				covered[di] = true;
			}
		}
	}
	return sum;
};

console.log(solve(10000));

// If this solution helped you, please star the repo!
