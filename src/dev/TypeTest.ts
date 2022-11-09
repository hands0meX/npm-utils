class T {
	static isFn(test: unknown): boolean {
		return typeof test === "function";
	}

	static isObj(test: unknown): boolean {
		return Object.prototype.toString.call(test) === "[object Object]";
	}

	static isValidObj(test: unknown): boolean {
		return this.isObj(test) && !!Object.keys(test).length;
	}

	static isArray(test: unknown): boolean {
		if (!this.isFn(Array.isArray)) {
			return Object.prototype.toString.call(test) === "[object Array]";
		} else {
			return Array.isArray(test);
		}
	}

	static isValidArray(test: any): boolean {
		return this.isArray(test) && !!test.length;
	}

	static isNum(test: unknown): boolean {
		return typeof test === "number";
	}

	static isStr(test: unknown): boolean {
		return typeof test === "string";
	}

	static isValidStr(test: any): boolean {
		return this.isStr(test) && !!test.length;
	}
}

export { T };
