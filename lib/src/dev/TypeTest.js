"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T = void 0;
class T {
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
}
exports.T = T;
