const swap = (arr, i, j) => {
	const t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
};

const reverse = (arr, start, end) => {
	const mid = (start + end) / 2;
	for (let i = start; i < mid; i++) {
		swap(arr, i, end - (i - start) - 1);
	}
};

const nextPermutation = arr => {
	let i = -1;
	for (let k = 0; k < arr.length - 1; k++) {
		if (arr[k] < arr[k + 1]) {
			i = k;
		}
	}
	// No next permutation exists.
	// In other way, next permutation is the first or initial ordering.
	if (i == -1) {
		return null;
	}
	let j = 0;
	for (let k = 0; k < arr.length; k++) {
		if (arr[i] < arr[k]) {
			j = k;
		}
	}
	swap(arr, i, j);
	reverse(arr, i + 1, arr.length);
	return arr;
};

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

const preparePermutations = n => {
	let arr = n.toString().split("");
	const permutations = [];
	while (arr != null) {
		permutations.push(Number.parseInt(arr.join(""), 10));
		arr = nextPermutation(arr);
	}
	return permutations;
};

const isSorted = arr => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] >= arr[i + 1]) {
			return false;
		}
	}
	return true;
};

const good = permutations => {
	if (!isSorted(permutations)) {
		return -1;
	}
	for (let i = 0; i < permutations.length; i++) {
		const pi = permutations[i];
		for (let j = i + 1; j < permutations.length; j++) {
			const pj = permutations[j];
			const d = pj - pi;
			if (permutations.includes(pi + 2 * d)) {
				return `${pi}${pi + d}${pi + 2 * d}`;
			}
		}
	}
	return -1;
};

const solve = limit => {
	const s = new Array(limit + 1);
	sieve(s);

	const primes = s
		.map((isPrime, i) => (isPrime ? i : undefined))
		.filter(x => !!x);

	const covered = [1487, 4817, 8147];
	const primesWithFourDigits = primes.filter(
		aPrime => aPrime.toString().length === 4 && !covered.includes(aPrime)
	);

	for (let i = 0; i < primesWithFourDigits.length; i++) {
		const aPrime = primesWithFourDigits[i];
		const permutations = preparePermutations(aPrime).filter(
			aPermutation => s[aPermutation]
		);
		const answer = good(permutations);
		if (answer != -1) {
			return answer;
		}
	}
	return -1;
};

console.log(solve(1e5));
