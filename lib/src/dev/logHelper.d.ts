/// <reference types="node" />
import { InspectOptions } from "util";
declare class _Console implements globalThis.Console {
    static DIR: string;
    /**
     * 获取调用的函数的 函数名 ｜ 函数所在文件位置
     */
    static getInfo(): any;
    set DIR(val: any);
    log(...data: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    assert(condition?: boolean, ...data: any[]): void;
    assert(value: any, message?: string, ...optionalParams: any[]): void;
    clear(): void;
    clear(): void;
    count(label?: string): void;
    count(label?: string): void;
    countReset(label?: string): void;
    countReset(label?: string): void;
    debug(...data: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    dir(item?: any, options?: any): void;
    dir(obj: any, options?: InspectOptions): void;
    dirxml(...data: any[]): void;
    dirxml(...data: any[]): void;
    error(...data: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    group(...data: any[]): void;
    group(...label: any[]): void;
    groupCollapsed(...data: any[]): void;
    groupCollapsed(...label: any[]): void;
    groupEnd(): void;
    groupEnd(): void;
    info(...data: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    table(tabularData?: any, properties?: string[]): void;
    table(tabularData: any, properties?: readonly string[]): void;
    time(label?: string): void;
    time(label?: string): void;
    timeEnd(label?: string): void;
    timeEnd(label?: string): void;
    timeLog(label?: string, ...data: any[]): void;
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    timeStamp(label?: string): void;
    trace(...data: any[]): void;
    trace(message?: any, ...optionalParams: any[]): void;
    warn(...data: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    Console: console.ConsoleConstructor;
    profile(label?: string): void;
    profileEnd(label?: string): void;
}
export declare const Console: _Console;
export {};
