const countDivisors = n => {
	const lim = Math.floor(Math.sqrt(n));
	let count = 0;
	for (let i = 1; i <= lim; i++) {
		if (n % i == 0) {
			count++;
			if (n / i != i) {
				count++;
			}
		}
	}
	return count;
};

const solve = limit => {
	let an = 1,
		n = 1;
	while (countDivisors(an) < limit) {
		n++;
		an = (n * (n + 1)) / 2;
	}
	return an;
};

console.log(solve(6));
console.log(solve(501));

// If this solution helped you, please star the repo!
