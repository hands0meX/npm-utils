"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T = void 0;
class T {
    /**
     *
     * @param test
     * @returns - string
                - object
                - array
                - number
                - null
                - undefined
                - regex
 - date
     */
    static typeOf(test) {
        return Object.prototype.toString
            .call(test)
            .split(" ")[1]
            .slice(0, -1)
            .toLowerCase();
    }
    static isFn(test) {
        return typeof test === "function";
    }
    static isObj(test) {
        return Object.prototype.toString.call(test) === "[object Object]";
    }
    static isValidObj(test) {
        return this.isObj(test) && !!Object.keys(test).length;
    }
    static isArray(test) {
        if (!this.isFn(Array.isArray)) {
            return Object.prototype.toString.call(test) === "[object Array]";
        }
        else {
            return Array.isArray(test);
        }
    }
    static isValidArray(test) {
        return this.isArray(test) && !!test.length;
    }
    static isNum(test) {
        return typeof test === "number";
    }
    static isStr(test) {
        return typeof test === "string";
    }
    static isValidStr(test) {
        return this.isStr(test) && !!test.length;
    }
    static isDate(test) {
        return Object.prototype.toString.call(test) === "[object Date]";
    }
}
exports.T = T;
