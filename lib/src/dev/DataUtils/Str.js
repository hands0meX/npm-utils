"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Str = void 0;
class Str {
    /**
     * 设置一个随机字符串
     * @param length 设置长度, 默认为16
     * @returns 随机字符串
     */
    static rollingRandomString(length = 16) {
        const result = [];
        for (let i = 0; i < length; i++) {
            const ranNum = Math.ceil(Math.random() * 25);
            result.push(String.fromCharCode(97 + ranNum));
        }
        return result.join("");
    }
}
exports.Str = Str;
