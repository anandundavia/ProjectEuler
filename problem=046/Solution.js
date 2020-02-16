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

const satisfiesGoldbachConjecture = (n, primes) => {
	for (let i = 0; primes[i] < n; i++) {
		const p = primes[i];
		const d = n - p;
		if (((n - p) & 1) === 0) {
			const sq = Math.sqrt(d / 2);
			if (sq === Math.floor(sq)) {
				return true;
			}
		}
	}
	return false;
};

const solve = () => {
	const limit = 1e6;
	const primes = new Array(limit + 1);

	sieve(primes);

	const onlyPrimes = primes
		.map((isPrime, i) => (isPrime ? i : undefined))
		.filter(x => !!x);
	const oddComposites = primes
		.map((isPrime, i) => (isPrime ? undefined : i))
		.filter(x => !!x && x > 1 && (x & 1) === 1);

	for (let i = 0; i < oddComposites.length; i++) {
		const n = oddComposites[i];
		if (!satisfiesGoldbachConjecture(n, onlyPrimes)) {
			return n;
		}
	}
	return -1;
};

console.log(solve());
