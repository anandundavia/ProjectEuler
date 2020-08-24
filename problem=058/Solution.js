// @ts-check
const isPrime = (x) => {
	for (let d = 2; d * d <= x; d++) {
		if (x % d == 0) return false;
	}
	return true;
};

const sieve = (primes = []) => {
	primes.fill(true);
	primes[0] = primes[1] = false;
	for (let i = 2; i < primes.length; i++) {
		if (primes[i]) {
			for (let j = i << 1; j < primes.length; j += i) {
				primes[j] = false;
			}
		}
	}
};

const solve = () => {
	const limit = 1e7;
	const primes = new Array(limit + 1);

	sieve(primes);

	let primeCount = 0,
		totalCount = 0,
		sideLength = 3,
		d = 2,
		i = 0;

	for (let n = 1; true; n += d, i++) {
		totalCount++;
		if (n < limit) {
			if (primes[n]) {
				primeCount++;
			}
		} else if (isPrime(n)) {
			primeCount++;
		}
		const percent = (100 * primeCount) / totalCount;
		if (percent !== 0 && percent < 10) {
			return sideLength;
		}
		if (i === 4) {
			d += 2;
			sideLength += 2;
			i = 0;
		}
	}
};

console.log(solve());
