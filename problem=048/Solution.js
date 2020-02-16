const solve = n => {
	let sum = 0n;
	for (let i = BigInt(1); i <= n; i++) {
		sum += BigInt(i ** i);
	}
	const string = sum.toString();
	return string.substring(string.length - 10);
};

console.log(solve(10));
console.log(solve(1000));
