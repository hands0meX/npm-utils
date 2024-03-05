export class Str {
	/**
	 * 创建一个指定长度的随机字符串
	 * @param length 长度
	 * @param useLowerCase 是否使用小写字母 
	 * @param useUpperCase 是否使用大写字母
	 * @param useSpecialChars	是否使用特殊字符
	 * @param useNumbers 是否使用数字
	 * @returns 
	 */
	static rollingRandomString(length, useLowerCase=true, useUpperCase=false, useSpecialChars=false, useNumbers=false) {
		let charset = '';
		
		if (useLowerCase) {
			charset += 'abcdefghijklmnopqrstuvwxyz';
		}
		
		if (useUpperCase) {
			charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}
		
		if (useSpecialChars) {
			charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
		}
		
		if (useNumbers) {
			charset += '0123456789';
		}
		
		let randomString = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length);
			randomString += charset[randomIndex];
		}
		
		return randomString;
	}
}
