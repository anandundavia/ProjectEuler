const gcd = (a, b) => {
	while (b != 0) {
		const t = b;
		b = a % b;
		a = t;
	}
	return a;
};

const lcm = (a, b) => (a * b) / gcd(a, b);

const solve = (from, to) => {
	let ans = 1;
	for (let i = from; i <= to; i++) {
		ans = lcm(ans, i);
	}
	return ans;
};

console.log(solve(1, 10));
console.log(solve(1, 20));
