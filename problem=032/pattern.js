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

let arr = "123456789".split("").map(x => Number.parseInt(x, 10));

while (arr != null) {
	arr = nextPermutation(arr);
	count++;
}
