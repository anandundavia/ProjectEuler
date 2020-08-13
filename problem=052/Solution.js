// @ts-check

const getDigitsSorted = (n) => n.toString().split("").sort().join(",");

const check = (n) => {
	let key = null;
	const numbers = [n];
	for (let i = 1; i < 7; i++) {
		const p = i * n;
		if (!key) {
			key = getDigitsSorted(p);
		} else {
			if (key !== getDigitsSorted(p)) {
				return;
			}
			numbers.push(p);
		}
	}

	console.log(numbers);
	process.exit(0);
};
const solve = () => {
	const limit = 1e6;
	for (let i = 1e1; i < limit; i++) check(i);
};

solve();
