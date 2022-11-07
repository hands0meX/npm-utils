class _ {
  static isFn(test: unknown) {
    return typeof test === "function";
  }

  static isObj(test: unknown) {
    return Object.prototype.toString.call(test) === "[object Object]";
  }

  static isValidObj(test: unknown) {
    return this.isObj(test) && !!Object.keys(test).length;
  }

  static isArray(test: unknown) {
    if (!this.isFn(Array.isArray)) {
      return Object.prototype.toString.call(test) === "[object Array]";
    } else {
      return Array.isArray(test);
    }
  }

  static isValidArray(test: any) {
    return this.isArray(test) && !!test.length;
  }

  static isNum(test: unknown) {
    return typeof test === "number";
  }

  static isStr(test: unknown) {
    return typeof test === "string";
  }

  static isValidStr(test: any) {
    return this.isStr(test) && !!test.length;
  }
}
export { _ };
