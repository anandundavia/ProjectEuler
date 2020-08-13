// @ts-check

let debug = false;
const log = (...args) => debug && console.log(...args);

let primes;

const explored = {};

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

const isPrime = (number) => primes[number];

const explore = (string, indices) => {
	const primes = [];
	const start = indices[0] === 0 ? 1 : 0;
	for (let i = start; i < 10; i++) {
		const arr = string.split("");
		for (let j = 0; j < indices.length; j++) {
			arr[indices[j]] = i;
		}
		const str = arr.join("");
		if (explored[`${indices}-${str}`]) return;
		explored[`${indices}-${str}`] = true;
		const newNumber = Number.parseInt(str, 10);
		if (isPrime(newNumber)) primes.push(newNumber);
	}

	if (primes.length === 8) {
		console.log(primes);
		process.exit(0);
	}
};

const nCr = (string, n, index, r, p, indices) => {
	if (r === 0) return explore(string, indices);
	if (index === n) return;
	for (let i = index; i < n; i++) {
		nCr(string, n, i + 1, r - 1, p + string[i], [...indices, i]);
	}
};

const solve = () => {
	const limit = 1e6;
	primes = new Array(limit + 1);

	sieve(primes);

	for (let i = 10; i < limit; i++) {
		const s = i.toString();
		for (let r = 1; r < s.length; r++) {
			nCr(s, s.length, 0, r, "", []);
		}
	}
};

solve();
