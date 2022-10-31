"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
class _Console {
    /**
     * 获取调用的函数的 函数名 ｜ 函数所在文件位置
     */
    static getInfo() {
        try {
            throw new Error().stack;
        }
        catch (error) {
            const fns = error.split("\n");
            let applyFn = fns[3].trim();
            applyFn = applyFn.replace(_Console.DIR, "");
            return applyFn;
        }
    }
    set DIR(val) {
        _Console.DIR = val;
    }
    log(message, ...optionalParams) {
        const applyFn = _Console.getInfo();
        console.log(...arguments, `${applyFn}`);
    }
    assert(value, message, ...optionalParams) {
        const applyFn = _Console.getInfo();
        console.assert(...arguments, `${applyFn}`);
    }
    clear() {
        console.clear();
    }
    count(label) {
        const applyFn = _Console.getInfo();
        console.count(...arguments, `${applyFn}`);
    }
    countReset(label) {
        const applyFn = _Console.getInfo();
        console.countReset(...arguments, `${applyFn}`);
    }
    debug(message, ...optionalParams) {
        const applyFn = _Console.getInfo();
        console.debug(...arguments, `${applyFn}`);
    }
    dir(obj, options) {
        const applyFn = _Console.getInfo();
        console.dir(...arguments, `${applyFn}`);
    }
    dirxml(...data) {
        const applyFn = _Console.getInfo();
        console.dirxml(...arguments, `${applyFn}`);
    }
    error(message, ...optionalParams) {
        const applyFn = _Console.getInfo();
        console.error(...arguments, `${applyFn}`);
    }
    group(...label) {
        const applyFn = _Console.getInfo();
        console.group(...arguments, `${applyFn}`);
    }
    groupCollapsed(...label) {
        const applyFn = _Console.getInfo();
        console.groupCollapsed(...arguments, `${applyFn}`);
    }
    groupEnd() {
        console.groupEnd();
    }
    info(message, ...optionalParams) {
        const applyFn = _Console.getInfo();
        console.info(...arguments, `${applyFn}`);
    }
    table(tabularData, properties) {
        const applyFn = _Console.getInfo();
        console.table(...arguments);
        console.log(`${applyFn}`);
    }
    time(label) {
        const applyFn = _Console.getInfo();
        console.time(...arguments, `${applyFn}`);
    }
    timeEnd(label) {
        const applyFn = _Console.getInfo();
        console.timeEnd(...arguments, `${applyFn}`);
    }
    timeLog(label, ...data) {
        const applyFn = _Console.getInfo();
        console.timeLog(...arguments, `${applyFn}`);
    }
    timeStamp(label) {
        const applyFn = _Console.getInfo();
        console.timeStamp(...arguments, `${applyFn}`);
    }
    trace(message, ...optionalParams) {
        const applyFn = _Console.getInfo();
        console.trace(...arguments, `${applyFn}`);
    }
    warn(message, ...optionalParams) {
        const applyFn = _Console.getInfo();
        console.warn(...arguments, `${applyFn}`);
    }
    profile(label) {
        const applyFn = _Console.getInfo();
        console.profile(...arguments, `${applyFn}`);
    }
    profileEnd(label) {
        const applyFn = _Console.getInfo();
        console.profileEnd(...arguments, `${applyFn}`);
    }
}
_Console.DIR = "";
exports.Console = new _Console();
