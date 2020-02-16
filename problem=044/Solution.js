const Pn = n => (n * (3 * n - 1)) / 2;

const isPentagonNumber = n => {
	const d = 1 + 24 * n;
	const sq = Math.sqrt(d);
	if (Math.floor(sq) !== sq) {
		return false;
	}
	return (1 + sq) % 6 === 0;
};

const n = 1e4;
for (let i = 1; i < n; i++) {
	const Pi = Pn(i);
	for (let j = i + 1; j < n; j++) {
		const Pj = Pn(j);
		const Ps = Pi + Pj;
		const Pd = Pj - Pi;
		if (isPentagonNumber(Ps) && isPentagonNumber(Pd)) {
			console.log(Pd);
			process.exit(0);
		}
	}
}
