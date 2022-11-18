"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Str = void 0;
class Str {
    static rollingRandomString(length = 16) {
        const result = [];
        const n = 16;
        for (let i = 0; i < n; i++) {
            const ranNum = Math.ceil(Math.random() * 25);
            result.push(String.fromCharCode(97 + ranNum));
        }
        return result.join("");
    }
}
exports.Str = Str;
