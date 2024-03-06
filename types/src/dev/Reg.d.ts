export declare class Reg {
    /**
     * 验证手机号码
     * @param phone 手机号码
     * @returns 是否为手机号码
     */
    static isPhone(phone: string): boolean;
    /**
     * 验证邮箱
     * @param email 邮箱
     * @returns 是否为邮箱
     */
    static isEmail(email: string): boolean;
    /**
     * 验证身份证号码
     * @param idCard 身份证号码
     * @returns 是否为身份证号码
     */
    static isIdCard(idCard: string): boolean;
    /**
     * 验证密码 只包含字母、数字、下划线，且长度在 min 到 max 之间）
     * @param password 密码
     * @returns 是否为密码
     */
    static isPassword(password: string, min: number, max: number): boolean;
    /**
     * 验证URL
     * @param url URL
     * @returns 是否为URL
     */
    static isUrl(url: string): boolean;
    /**
     * 验证IP地址
     * @param ip IP地址
     * @returns 是否为IP地址
     */
    static isIp(ip: string): boolean;
    /***
     * 邮政编号
     * @param postalCode 邮政编号
     * @returns 是否为邮政编号
     */
    static isPostalCode(postalCode: string): boolean;
    /**
     * 是否中文
     * @param chinese 中文
     * @returns 是否为中文
     */
    static isChinese(chinese: string): boolean;
}
