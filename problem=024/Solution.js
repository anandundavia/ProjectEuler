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

const solve = (arr, index) => {
	while (arr != null && --index > 0) {
		arr = nextPermutation(arr);
	}
	return arr.join("");
};

console.log(solve([0, 1, 2], 1));
console.log(solve([0, 1, 2], 2));
console.log(solve([0, 1, 2], 3));
console.log(solve([0, 1, 2], 4));
console.log(solve([0, 1, 2], 5));
console.log(solve([0, 1, 2], 6));
console.log(solve([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1e6));

// If this solution helped you, please star the repo!
