const limit = 4e6; // 4M
let sum = 0;
let a0 = 0,
	a1 = 1,
	an = -1; // initial Fibonacci values

while (an < limit) {
	an = a0 + a1;

	if ((an & 1) == 0) {
		sum += an;
	}

	a0 = a1;
	a1 = an;
}

console.log(sum);
