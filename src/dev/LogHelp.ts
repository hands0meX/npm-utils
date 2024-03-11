import { InspectOptions } from "util";

interface _C {
    [key: string]: () => unknown;
}
class _Console implements globalThis.Console {
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
            applyFn = applyFn.replace(_Console.DIR, "");
            return applyFn;
        }
    }

    set DIR(val) {
        _Console.DIR = val;
    }

    log(...data: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    log(message?: unknown, ...optionalParams: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.log(...arguments, `${applyFn}`);
    }
    assert(condition?: boolean, ...data: any[]): void;
    assert(value: any, message?: string, ...optionalParams: any[]): void;
    assert(
        value?: unknown,
        message?: unknown,
        ...optionalParams: unknown[]
    ): void {
        const applyFn = _Console.getInfo();
        console.assert(...arguments, `${applyFn}`);
    }
    clear(): void;
    clear(): void;
    clear(): void {
        console.clear();
    }
    count(label?: string): void;
    count(label?: string): void;
    count(label?: unknown): void {
        const applyFn = _Console.getInfo();
        console.count(...arguments, `${applyFn}`);
    }
    countReset(label?: string): void;
    countReset(label?: string): void;
    countReset(label?: unknown): void {
        const applyFn = _Console.getInfo();
        console.countReset(...arguments, `${applyFn}`);
    }
    debug(...data: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    debug(message?: unknown, ...optionalParams: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.debug(...arguments, `${applyFn}`);
    }
    dir(item?: any, options?: any): void;
    dir(obj: any, options?: InspectOptions): void;
    dir(obj?: unknown, options?: unknown): void {
        const applyFn = _Console.getInfo();
        console.dir(...arguments, `${applyFn}`);
    }
    dirxml(...data: any[]): void;
    dirxml(...data: any[]): void;
    dirxml(...data: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.dirxml(...arguments, `${applyFn}`);
    }
    error(...data: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    error(message?: unknown, ...optionalParams: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.error(...arguments, `${applyFn}`);
    }
    group(...data: any[]): void;
    group(...label: any[]): void;
    group(...label: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.group(...arguments, `${applyFn}`);
    }
    groupCollapsed(...data: any[]): void;
    groupCollapsed(...label: any[]): void;
    groupCollapsed(...label: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.groupCollapsed(...arguments, `${applyFn}`);
    }
    groupEnd(): void;
    groupEnd(): void;
    groupEnd(): void {
        console.groupEnd();
    }
    info(...data: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    info(message?: unknown, ...optionalParams: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.info(...arguments, `${applyFn}`);
    }
    table(tabularData?: any, properties?: string[]): void;
    table(tabularData: any, properties?: readonly string[]): void;
    table(tabularData?: unknown, properties?: unknown): void {
        const applyFn = _Console.getInfo();
        console.table(...arguments);
        console.log(`${applyFn}`);
    }
    time(label?: string): void;
    time(label?: string): void;
    time(label?: unknown): void {
        const applyFn = _Console.getInfo();
        console.time(...arguments, `${applyFn}`);
    }
    timeEnd(label?: string): void;
    timeEnd(label?: string): void;
    timeEnd(label?: unknown): void {
        const applyFn = _Console.getInfo();
        console.timeEnd(...arguments, `${applyFn}`);
    }
    timeLog(label?: string, ...data: any[]): void;
    timeLog(label?: string, ...data: any[]): void;
    timeLog(label?: unknown, ...data: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.timeLog(...arguments, `${applyFn}`);
    }
    timeStamp(label?: string): void;
    timeStamp(label?: string): void;
    timeStamp(label?: unknown): void {
        const applyFn = _Console.getInfo();
        console.timeStamp(...arguments, `${applyFn}`);
    }
    trace(...data: any[]): void;
    trace(message?: any, ...optionalParams: any[]): void;
    trace(message?: unknown, ...optionalParams: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.trace(...arguments, `${applyFn}`);
    }
    warn(...data: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    warn(message?: unknown, ...optionalParams: unknown[]): void {
        const applyFn = _Console.getInfo();
        console.warn(...arguments, `${applyFn}`);
    }
    Console: console.ConsoleConstructor;
    profile(label?: string): void {
        const applyFn = _Console.getInfo();
        console.profile(...arguments, `${applyFn}`);
    }
    profileEnd(label?: string): void {
        const applyFn = _Console.getInfo();
        console.profileEnd(...arguments, `${applyFn}`);
    }
}

export const Console = new _Console() as globalThis.Console;
