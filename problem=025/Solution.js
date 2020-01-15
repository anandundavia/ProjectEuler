// Node 12.x

const getNumberOfDigits = n => BigInt(n).toString().length;

const solve = numberOfDigits => {
	let a = 1n,
		b = 1n,
		c;
	let index = 2;
	do {
		c = BigInt(a + b);
		index++;
		a = b;
		b = c;
	} while (getNumberOfDigits(c) != numberOfDigits);
	return index;
};

console.log(solve(2));
console.log(solve(3));
console.log(solve(1000));

// If this solution helped you, please star the repo!
