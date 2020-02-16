const ft = n => n + 1,
	fp = n => 3 * n + 1,
	fh = n => 4 * n + 1;

let t = 285,
	p = 165,
	h = 143;

let start = 40755;

let ot = start,
	op = start,
	oh = start;

while (true) {
	let nt = ft(t++) + ot;
	let np = fp(p++) + op;
	let nh = fh(h++) + oh;
	const max = Math.max(nt, np, nh);
	while (nt < max) {
		nt = ft(t++) + nt;
	}
	while (np < max) {
		np = fp(p++) + np;
	}
	while (nh < max) {
		nh = fh(h++) + nh;
	}
	if (nt === np && np === nh) {
		console.log(nt);
		process.exit(0);
	}
	ot = nt;
	op = np;
	oh = nh;
}
