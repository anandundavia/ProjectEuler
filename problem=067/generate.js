const fs = require("fs");

const fileName = "p067_triangle.txt";
const text = fs.readFileSync(fileName, "utf8");

const rows = 100;
const matrix = Array.from(Array(rows), () => new Array(rows));

const processed = text.split("\n").map(x => x.split(" "));

for (let i = 0; i < rows; i++) {
	for (let j = 0; j < rows; j++) {
		matrix[i][j] = 0;
		if (j < processed[i].length) {
			matrix[i][j] = +processed[i][j];
		}
	}
}

// for java
// console.log(`{${matrix.map(x => `{${x.join(",")}}\n`).join(",")}}`);
// console.log();
// for js
console.log(matrix);
