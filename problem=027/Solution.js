const sieve = primes => {
	primes.fill(true);
	for (let i = 2; i < primes.length; i++) {
		if (primes[i]) {
			for (let j = i << 1; j < primes.length; j += i) {
				primes[j] = false;
			}
		}
	}
};

const fn = (n, a, b) => n * n + a * n + b;

const isPrime = (n, primes) => (n <= 1 ? false : primes[n]);

const countConsecutivePrimes = (a, b, primes) => {
	let i = 0;
	while (true) {
		const fi = fn(i++, a, b);
		if (!isPrime(fi, primes)) {
			break;
		}
	}
	return i;
};

const solve = (a, b) => {
	const primes = new Array(2001000 + 2);
	sieve(primes);
	let max = Number.MIN_SAFE_INTEGER;
	let answer = 0;
	for (let i = -1 * a; i <= a; i++) {
		for (let j = -1 * b; j <= b; j++) {
			const count = countConsecutivePrimes(i, j, primes);
			if (count >= max) {
				max = count;
				answer = i * j;
			}
		}
	}
	return answer;
};

console.log(solve(1000, 1000));

// If this solution helped you, please star the repo!
