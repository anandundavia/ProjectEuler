const solve = () => {
	let arr = [1, 2];
	for (let i = 0; i < 10; i++) {
		const [n, d] = arr;
		const fn = [d, 2 * d + n];
		const z = [3 * d + n, 2 * d + n];
		console.log(z);
		arr = fn;
	}
};

console.log(solve());
