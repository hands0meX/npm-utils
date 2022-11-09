"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    static debounce(fn, delay) {
        let timer = undefined;
        return function (...args) {
            if (timer !== undefined) {
                clearTimeout(timer);
                timer = undefined;
            }
            timer = setTimeout(() => {
                fn.apply(this, args);
                clearTimeout(timer);
                timer = undefined;
            }, delay);
        };
    }
    static throttle(fn, wait) {
        let timer = undefined;
        return function (...args) {
            if (timer !== undefined) {
                return;
            }
            timer = setTimeout(() => {
                fn.apply(this, args);
                clearTimeout(timer);
                timer = undefined;
            }, wait);
        };
    }
}
exports.Timer = Timer;
