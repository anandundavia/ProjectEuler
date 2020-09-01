// @ts-check
const fs = require("fs");

const fileContent = fs.readFileSync("./p059_cipher.txt", "utf-8");
const encryptedTokens = fileContent
	.split(",")
	.map((t) => Number.parseInt(t, 10));

const decrypt = (encryptedText, key) => {
	return encryptedText.map((t, i) => t ^ key[i % key.length]);
};

const validScore = (decryptedText) =>
	(decryptedText.reduce((count, t) => {
		let shouldInclude =
			(48 <= t && t <= 57) || // numbers
			(63 <= t && t <= 90) || // capital with ? and @
			(97 <= t && t <= 122) || // small
			(32 <= t && t <= 34) || // <space>, !, "
			(39 <= t && t <= 41) || // ', (, )
			(44 <= t && t <= 46) || // <,>, -, .
			(58 <= t && t <= 59); // :, ;
		if (shouldInclude) return count + 1;
		return count;
	}, 0) *
		100) /
	decryptedText.length;
const toString = (decryptedText) =>
	decryptedText.map((t) => String.fromCharCode(t)).join("");

const a = "a".charCodeAt(0),
	z = "z".charCodeAt(0);
const scores = [];
for (let i = a; i <= z; i++) {
	for (let j = a; j <= z; j++) {
		for (let k = a; k <= z; k++) {
			const key = [i, j, k];
			const decryptedTokens = decrypt(encryptedTokens, key);
			scores.push({
				key,
				score: validScore(decryptedTokens),
				keyString: toString(key),
				decryptedTokens,
				decryptedString: toString(decryptedTokens),
			});
		}
	}
}
const scoresSorted = scores.sort((a, b) => b.score - a.score);
const probableAnswer = scoresSorted[0];

const answer = probableAnswer.decryptedTokens.reduce((s, i) => s + i, 0);

console.log("score: ", probableAnswer.score);
console.log("text:");
console.log(probableAnswer.decryptedString);
console.log("");
console.log(answer);
