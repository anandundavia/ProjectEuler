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

const countDistinctPrimeFactors = (n, primes) => {
	let i = 0;
	let count = 0;
	while (n !== 1) {
		let isCounted = false;
		while (n % primes[i] === 0) {
			isCounted = true;
			n /= primes[i];
		}
		if (isCounted) count++;
		i++;
	}
	return count;
};

const solve = () => {
	const limit = 1e6;
	const primes = new Array(limit + 1);

	sieve(primes);

	const onlyPrimes = primes
		.map((isPrime, i) => (isPrime ? i : undefined))
		.filter(x => !!x);

	const T = 4;
	for (i = 2 * 3 * 5 * 7; i <= limit - T; i++) {
		let found = true;
		for (let j = 0; j < T && found; j++) {
			if (countDistinctPrimeFactors(i + j, onlyPrimes) != T) {
				found = false;
			}
		}
		if (found) {
			return i;
		}
	}

	return -1;
};

console.log(solve());
