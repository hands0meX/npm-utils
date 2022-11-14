"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
const TypeTest_1 = require("./TypeTest");
class Time {
    /**
     *
     * @param date Date
     * @param fmtPattern like "D:h"
     * @param fmtModifier the date modifier returned by the function
     * @returns string
     */
    static datefmt(date, fmtPattern = "Y-M-D:h-m-s", fmtModifier = "/:") {
        if (!TypeTest_1.T.isDate(date))
            return "Unexpected parameter pass";
        let stageArr = fmtPattern
            .split(":")
            .map((stage, index) => {
            return stage.split("-");
        });
        const Y = date.getFullYear();
        const M = date.getMonth() + 1;
        const D = date.getDate();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        stageArr = stageArr.map((stage2, index) => {
            const mod = fmtModifier[index] ? fmtModifier[index] : "-";
            return stage2
                .map(i => {
                return eval(i);
            })
                .join(mod);
        });
        return stageArr.join(" ");
    }
}
exports.Time = Time;
