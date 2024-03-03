declare class Timer {
    static debounce(fn: Function, delay: number): (...args: any[]) => void;
    static throttle(fn: Function, wait: number): (...args: any[]) => void;
}
export { Timer };
