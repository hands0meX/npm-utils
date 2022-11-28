import { Console } from "./LogHelper";
import { T } from "./TypeTest";

class HttpHelper {
    /**
     *
     * @param obj arguments : obj
     * @returns string "?a=123&b=321"
     */
    static obj2Query(obj: any) {
        if (!T.isValidObj(obj)) {
            return "";
        }
        let strArr: string[] = [];
        for (let key in obj) {
            strArr.push(`${key}=${obj[key]}`);
        }
        return `?${strArr.join("&")}`;
    }
}
