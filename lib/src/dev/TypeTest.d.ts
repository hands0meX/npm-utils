declare class T {
    /**
     *
     * @param test
     * @returns - string
                - object
                - array
                - number
                - null
                - undefined
                - regex
 - date
     */
    static typeOf(test: unknown): string;
    static isFn(test: unknown): boolean;
    static isObj(test: unknown): boolean;
    static isValidObj(test: unknown): boolean;
    static isArray(test: unknown): boolean;
    static isValidArray(test: any): boolean;
    static isNum(test: unknown): boolean;
    static isStr(test: unknown): boolean;
    static isValidStr(test: any): boolean;
    static isDate(test: unknown): boolean;
}
export { T };
