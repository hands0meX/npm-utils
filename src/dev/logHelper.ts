interface _C {
	[key: string]: () => unknown
}
export class Console{
	[x: string]: any;
	[x: number]: any;
	[x: symbol]: any;
	static temp: any;
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
		Console.temp = args;
		const applyFn = Console.getInfo();
		console.log(`=== ${applyFn} ===`, ...args);
	}

	// static table(...args: unknown[]) {
	// 	const applyFn = this.getInfo();
	// 	console.table(args);
	// 	console.log(applyFn);
	// }
	log(...args: unknown[]) {
		Console.temp = args;
		const applyFn = Console.getInfo();
		console.log(`=== ${applyFn} ===`, ...args);
	}
}

const handler = {
	get(target:Console, prop: string, reciver: any) {
		if(prop in console) {
			setTimeout(() => {
				console[prop](...Console.temp);
			}, 0);
		}
		return Reflect.get(target, prop);
	}
};
const proxy = new Proxy(Console, handler);

proxy.log(123456);
proxy.table(123);
