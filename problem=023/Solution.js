const isAbundant = n => {
	const limit = Math.floor(Math.sqrt(n));
	let sum = 0;
	for (let i = 1; i <= limit && sum <= n; i++) {
		if (n % i == 0) {
			sum += i;
			if (i != 1 && n / i != i) {
				sum += n / i;
			}
		}
	}
	return sum > n;
};

const binarySearch = (list, n) => {
	let left = 0,
		right = list.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (n === list[mid]) {
			return mid;
		}
		if (n < list[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return -1;
};

const abundantList = [];

const canBeExpressedAsSumOfTwoAbundantNumbers = n => {
	for (let i = 0; i < abundantList.length; i++) {
		const anAbundantNumber = abundantList[i];
		const counterNumber = n - anAbundantNumber;
		if (binarySearch(abundantList, counterNumber) >= 0) {
			return true;
		}
	}
	return false;
};

const solve = limit => {
	for (let i = 1; i <= limit; i++) {
		if (isAbundant(i)) {
			abundantList.push(i);
		}
	}
	let sum = 0;
	for (let i = 1; i <= limit; i++) {
		if (!canBeExpressedAsSumOfTwoAbundantNumbers(i)) {
			sum += i;
		}
	}
	return sum;
};

console.log(solve(28123));

// If this solution helped you, please star the repo!
