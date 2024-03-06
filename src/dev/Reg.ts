export class Reg {
    /**
     * 验证手机号码
     * @param phone 手机号码
     * @returns 是否为手机号码
     */
    static isPhone(phone: string) {
        return /^1[3456789]\d{9}$/.test(phone);
    }
    /**
     * 验证邮箱
     * @param email 邮箱
     * @returns 是否为邮箱
     */
    static isEmail(email: string) {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
    }
    /**
     * 验证身份证号码
     * @param idCard 身份证号码
     * @returns 是否为身份证号码
     */
    static isIdCard(idCard: string) {
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard);
    }
    /**
     * 验证密码 只包含字母、数字、下划线，且长度在 min 到 max 之间）
     * @param password 密码
     * @returns 是否为密码
     */
    static isPassword(password: string, min: number, max: number) {
        const reg = new RegExp(`^[a-zA-Z0-9_]{${min},${max}}$`);
        return reg.test(password);
    }
    /**
     * 验证URL
     * @param url URL
     * @returns 是否为URL
     */
    static isUrl(url: string) {
        return /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(url);
    }
    /**
     * 验证IP地址
     * @param ip IP地址
     * @returns 是否为IP地址
     */
    static isIp(ip: string) {
        return /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/.test(ip);
    }
    /***
     * 邮政编号
     * @param postalCode 邮政编号
     * @returns 是否为邮政编号
     */
    static isPostalCode(postalCode: string) {
        return /^[1-9]\d{5}$/.test(postalCode);
    }
    /**
     * 是否中文
     * @param chinese 中文
     * @returns 是否为中文
     */
    static isChinese(chinese: string) {
        return /^[\u4e00-\u9fa5]+$/.test(chinese);
    }
}