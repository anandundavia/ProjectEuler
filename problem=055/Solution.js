// @ts-check
const getNextNumber = (n) =>
	n + Number.parseInt(n.toString().split("").reverse().join(""), 10);

const isPalindrome = (n) => {
	const arr = n.toString().split("");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[arr.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

const isLychrelNumber = (n) => {
	const MAX_ITERATIONS = 50;
	for (let i = 0; i < MAX_ITERATIONS; i++) {
		n = getNextNumber(n);
		if (isPalindrome(n)) {
			return false;
		}
	}
	return true;
};

const solve = () => {
	let answer = 0;
	for (let i = 1; i < 1e4; i++) {
		if (isLychrelNumber(i)) {
			answer++;
		}
	}
	return answer;
};

console.log(solve());
