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

const toNumber = arr => Number.parseInt(arr.join(""), 10);
const toNumberRange = (arr, start, end) => toNumber(arr.slice(start, end));

const D = [
	{ d: 2, s: 2, e: 4 },
	{ d: 3, s: 3, e: 5 },
	{ d: 5, s: 4, e: 6 },
	{ d: 7, s: 5, e: 7 },
	{ d: 11, s: 6, e: 8 },
	{ d: 13, s: 7, e: 9 },
	{ d: 17, s: 8, e: 10 }
];

const satisfies = arr =>
	D.every(o => toNumberRange(arr, o.s - 1, o.e) % o.d === 0);

const solve = digit => {
	let arr = [...Array(digit + 1)].map((_, i) => i);
	let answer = 0;
	while (arr != null) {
		if (arr[0] !== 0 && satisfies(arr)) {
			answer += toNumber(arr);
		}
		arr = nextPermutation(arr);
	}
	return answer;
};

console.log(solve(9));

// If this solution helped you, please star the repo!
