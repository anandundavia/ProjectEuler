const answer = {};
const cache = {};

const explore = (n, cycle) => {
	if (cycle[n] !== undefined) {
		return -1;
	}
	cycle[n] = true;
	if (cache[n] !== undefined) {
		return cache[n];
	}
	const sum = satisfies(n, 5);
	if (sum == n) {
		return n;
	} else {
		cache[n] = explore(sum, cycle);
		return cache[n];
	}
};

const satisfies = (n, power) =>
	n
		.toString()
		.split("")
		.map(x => Number.parseInt(x, 10))
		.reduce((s, p) => s + p ** power, 0);

const solve = () => {
	for (let i = 2; i < 1e7; i++) {
		const root = explore(i, {});
		if (root > 1) {
			answer[root] = true;
		}
	}
	return Object.keys(answer).reduce((s, x) => s + Number.parseInt(x, 10), 0);
};

console.log(solve());

// If this solution helped you, please star the repo!
