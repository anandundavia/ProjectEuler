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

const solve = () => {
	const limit = 600851475143;
	const l = Math.floor(Math.sqrt(limit));
	const primes = new Array(l + 1);

	sieve(primes);

	for (let i = primes.length - 1; i >= 0; i--) {
		if (primes[i] && limit % i == 0) {
			return i;
		}
	}

	return -1;
};

console.log(solve());
