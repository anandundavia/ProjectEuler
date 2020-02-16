const sieve = (primes = []) => {
	primes.fill(true);
	primes[0] = false;
	primes[1] = false;
	for (let i = 2; i < primes.length; i++) {
		if (primes[i]) {
			for (let j = i << 1; j < primes.length; j += i) {
				primes[j] = false;
			}
		}
	}
};

const solve = limit => {
	const s = new Array(limit + 1);
	sieve(s);

	const primes = s
		.map((isPrime, i) => (isPrime ? i : undefined))
		.filter(x => !!x && x > 1);

	let sum = primes.reduce((s, i) => s + i, 0);

	let max = 0,
		behindSum = 0,
		answer = -1;
	for (let i = 0; i < primes.length; i++) {
		let start = sum - behindSum;
		for (let j = primes.length - 1; j > i; j--) {
			if (start < s.length && s[start]) {
				if (j + 1 - i > max) {
					max = j + 1 - i;
					answer = start;
				}
				break;
			}
			start -= primes[j];
		}
		behindSum += primes[i];
	}
	return { max, answer };
};

console.log(solve(100));
console.log(solve(1000));
console.log(solve(1e4));
console.log(solve(1e5));
console.log(solve(1e6));
