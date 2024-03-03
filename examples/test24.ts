import { Console, T, Str, Reg } from '../src/index';

const res = Str.rollingRandomString(123)
Console.log(res)

Console.log(Reg.isPhone('11111111111'))
Console.log(Reg.isEmail("12@qq.com"))
Console.log(Reg.isChinese("中文"))
Console.log(Reg.isIdCard("123456789012345678"))
Console.log(Reg.isUrl("http://www.baidu.com"))