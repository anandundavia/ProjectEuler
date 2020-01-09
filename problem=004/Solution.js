const isPalindrome = n => {
	const chars = n.toString().split("");
	for (let i = 0; i < chars.length / 2; i++) {
		if (chars[i] != chars[chars.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

// Brute-forcing the SHIT OUTTA this problem
const solve = () => {
	const max = 999;
	let ans = Number.MIN_SAFE_INTEGER;
	for (let i = max; i >= 0; i--) {
		for (let j = max; j >= 0; j--) {
			if (isPalindrome(i * j)) {
				ans = Math.max(ans, i * j);
			}
		}
	}
	return ans;
};

console.log(solve());
