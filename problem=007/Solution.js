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

const solve = index => {
	const primesToFind =
		Math.floor(index * (Math.log(index) + Math.log(Math.log(index)))) + 3;
	const primes = new Array(primesToFind);

	sieve(primes);

	for (let i = 2; i < primes.length; i++) {
		if (primes[i]) {
			index--;
			if (index == 0) {
				return i;
			}
		}
	}
	return -1;
};

console.log(solve(6));
console.log(solve(10001));
