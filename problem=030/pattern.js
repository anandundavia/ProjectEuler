const sumPower = (n, power) =>
	n
		.toString()
		.split("")
		.map(x => Number.parseInt(x, 10))
		.reduce((s, p) => s + p ** power, 0);

let maxCount = 0;
const first = {};
const seen = {};
const research = s => {
	const power = 5;
	let count = 0;
	let start = s;

	while (count++ < 100) {
		let sum = sumPower(start, power);
		if (start === sum) {
			// console.log(start + "\tmatch");
			if (!first[sum]) {
				first[sum] = s;
			}
			break;
		}
		if (seen[sum]) {
			// console.log(start + "\tcycle");
			break;
		}
		seen[sum] = true;
		start = sum;
	}
	maxCount = Math.max(count, maxCount);
	if (count > 100) {
		console.log(start + "\tround ended");
	}
};

rounds = 1e6;
for (let i = 0; i < rounds; i++) {
	research(i);
}

// console.log();
console.log(Object.keys(first));
console.log(maxCount);

// 194979

// console.log(sumPower(194978, 5));
// console.log(sumPower(194979, 5));
// console.log(sumPower(194980, 5));

// console.log(sumPower())
