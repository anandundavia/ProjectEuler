// There are two solutions.
// One uses cached answers upto 1e7
// One does not
// As you might have guessed, cached is much faster!
//
// The variable names are a bit mathematical

// This is cached solution
const CACHE_LIMIT = 1e7;
const cache = new Array(CACHE_LIMIT);

const gc = n => {
	if (n < CACHE_LIMIT && cache[n] !== 0) {
		return cache[n];
	}
	if (n === 1) {
		return 1;
	}
	const ans = n % 2 === 0 ? 1 + gc(n / 2) : 1 + gc(3 * n + 1);
	if (n < CACHE_LIMIT) {
		cache[n] = ans;
	}
	return ans;
};

// This is non cached solution
const g = n => {
	if (n === 1) {
		return 1;
	}
	return n % 2 == 0 ? 1 + g(n / 2) : 1 + g(3 * n + 1);
};

const solve = n => {
	// Time stamping both of them!
	const gcStartTime = Date.now();
	let max = Number.MIN_SAFE_INTEGER,
		iMax = Number.MIN_SAFE_INTEGER;
	for (let i = n; i > 0; i--) {
		const gi = gc(i);
		if (gi >= max) {
			max = gi;
			iMax = i;
		}
	}
	const gcEndTime = Date.now();

	const gStartTime = Date.now();
	max = Number.MIN_SAFE_INTEGER;
	iMax = Number.MIN_SAFE_INTEGER;
	for (let i = n; i > 0; i--) {
		const gi = g(i);
		if (gi >= max) {
			max = gi;
			iMax = i;
		}
	}
	const gEndTime = Date.now();

	console.log("gc: " + (gcEndTime - gcStartTime) + "ms");
	console.log("g : " + (gEndTime - gStartTime) + "ms");
	return iMax;
};

console.log(solve(1e6));

// If this solution helped you, please star the repo!
