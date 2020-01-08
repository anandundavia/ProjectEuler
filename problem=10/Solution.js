const sieve = (primes = []) => {
	primes.fill(true);
	for (let i = 2; i < primes.length; i++) {
		if (primes[i]) {
			for (let j = i << 1; j < primes.length; j += i) {
				primes[j] = false;
			}
		}
	}
};

const solve = limit => {
	const primes = new Array(limit + 1);
	sieve(primes);
	let sum = 0;
	for (let i = 2; i < primes.length; i++) {
		if (primes[i]) {
			sum += i;
		}
	}
	return sum;
};

console.log(solve(10));
console.log(solve(2e6));

// If this solution helped you, please star the repo!
