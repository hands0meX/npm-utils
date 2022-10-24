const fs = require("fs");
const readline = require("readline");
const path = require("path");

let count = 0;
let reg_line = /Console.log\(([\s\S]*)\)/g;
export class Console {
	static log(...args) {
		const rl = readline.createInterface({
			input: fs.createReadStream(__filename),
			output: process.stdout,
			terminal: false,
		});

		rl.on("line", line => {
			count++;
			const result = reg_line.test(line);
			if (result) {
				const trimIdx = line.lastIndexOf(" ");
				console.log(...args, `${count}:${trimIdx === -1 ? 0 : trimIdx}`);
			}
		});
	}
}
