"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeTest_1 = require("./TypeTest");
class HttpHelper {
    /**
     *
     * @param obj arguments : obj
     * @returns string "?a=123&b=321"
     */
    static obj2Query(obj) {
        if (!TypeTest_1.T.isValidObj(obj)) {
            return "";
        }
        let strArr = [];
        for (let key in obj) {
            strArr.push(`${key}=${obj[key]}`);
        }
        return `?${strArr.join("&")}`;
    }
}
