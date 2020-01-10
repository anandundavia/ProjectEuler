const sum = n =>
	n
		.toString()
		.split("")
		.map(x => Number.parseInt(x, 10))
		.reduce((s, i) => s + i, 0);

const pattern = n => {
	console.log(`i\t2 ** i\tsum(2 ** i)`);
	for (let i = 1; i <= n; i++) {
		console.log(`${i}\t${2 ** i}\t\t${sum(2 ** i)}`);
	}
};

pattern(30);
// console.log(sum(2 ** 100));
