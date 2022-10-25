const fs = require("fs");
const readline = require("readline");
const path = require("path");

let count = 0;
let reg_line = /Console.log\(([\s\S]*)\)/g;
export class Console {
	static DIR = "";
	static log(...args: unknown[]) {
		// const rl = readline.createInterface({
		// 	input: fs.createReadStream(__filename),
		// 	output: process.stdout,
		// 	terminal: false,
		// });
		// rl.on("line", (line: string) => {
		// 	count++;
		// 	const result = reg_line.test(line);
		// 	console.log(process.cwd());
		// 	if (result) {
		// 		const trimIdx = line.lastIndexOf(" ");
		// 		console.log(...args, `${count}:${trimIdx === -1 ? 0 : trimIdx}`);
		// 	}
		// });
		try {
			throw new Error().stack;
		} catch (error: any) {
			const fns = error.split("\n");
			// const reg = /\([\w\W]+\)/;
			let applyFn = fns[2].trim();
			applyFn = applyFn.replace(Console.DIR, "");
			console.log(`- ${applyFn} -`, ...args);
		}
	}
}
