const solve = p => {
	let n = 1,
		offset = 2;
	let sum = 0;
	for (let i = 1; n <= p * p; i++) {
		sum += n;
		n += offset;
		if (i % 4 == 0) {
			offset += 2;
		}
	}
	return sum;
};

console.log(solve(1001));

// If this solution helped you, please star the repo!
