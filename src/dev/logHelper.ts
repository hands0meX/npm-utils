export class Console {
	static DIR = "";

	/**
	 * 获取调用的函数的 函数名 ｜ 函数所在文件位置
	 */
	static getInfo() {
		try {
			throw new Error().stack;
		} catch (error: any) {
			const fns = error.split("\n");
			let applyFn = fns[3].trim();
			applyFn = applyFn.replace(Console.DIR, "");
			return applyFn;
		}
	}

	static log(...args: unknown[]) {
		const applyFn = this.getInfo();
		console.log(`=== ${applyFn} ===`, ...args);
	}

	static table(...args: unknown[]) {
		const applyFn = this.getInfo();
		console.table(args);
		console.log(applyFn);
	}
}
