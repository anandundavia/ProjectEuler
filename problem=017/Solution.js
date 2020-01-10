const numbers = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety"
};

const exponents = {
	2: "hundred",
	3: "thousand"
};

const simplify = arr => {
	return Number.parseInt(arr.join(""), 10)
		.toString()
		.split("");
};

const toTextFront = arr => {
	let text = "";
	for (let i = 0; i < arr.length; i++) {
		if (numbers[arr[i]]) {
			const exp = arr.length - i + 1;
			text += `${numbers[arr[i]]} ${exponents[exp]}`;
		}
	}
	return text;
};

const toTextBack = arr => {
	const n = Number.parseInt(arr.join(""), 10);
	if (numbers[n]) {
		return numbers[n];
	}
	let text = "";
	if (numbers[+arr[0] * 10]) {
		text += numbers[+arr[0] * 10];
	}
	if (numbers[arr[1]]) {
		text += " " + numbers[arr[1]];
	}
	return text;
};

const toText = n => {
	if (n <= 20) {
		return numbers[n];
	}
	const arr = n.toString().split("");
	const frontElements = arr.slice(0, arr.length - 2);
	const backElements = simplify(arr.slice(arr.length - 2));

	const backText = toTextBack(backElements);

	if (frontElements.length > 0) {
		const frontText = toTextFront(frontElements);
		if (backText) {
			return `${frontText} and ${backText}`;
		}
		return frontText;
	}
	return backText;
};

const solve = n => {
	const answers = [];
	for (let i = 1; i <= n; i++) {
		answers.push(toText(i));
	}
	return answers
		.join("")
		.split(" ")
		.join("").length;
};

console.log(solve(5));
console.log(solve(1000));

// Tests!
// console.log(toText(401));
// console.log(toText(415));
// console.log(toText(467));
// console.log(toText(500));

// console.log(toTextFront([1, 2]));
// console.log(toTextFront([1, 0]));
// console.log(toTextFront([2]));
// console.log(toTextFront([9]));

// console.log(toTextBack([1]));
// console.log(toTextBack([9]));
// console.log(toTextBack([1, 1]));
// console.log(toTextBack([1, 9]));
// console.log(toTextBack([2, 0]));
// console.log(toTextBack([2, 1]));
// console.log(toTextBack([2, 9]));
// console.log(toTextBack([3, 0]));
// console.log(toTextBack([3, 3]));

// console.log(toText(1));
// console.log(toText(11));
// console.log(toText(29));
// console.log(toText(99));
// console.log(toText(111));
// console.log(toText(200));
// console.log(toText(301));
// console.log(toText(999));
// console.log(toText(915));
// console.log(toText(1000));
// console.log(toText(1111));
