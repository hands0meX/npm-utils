import { Console, T } from '@car_han/utils';

Console.log('test24');

function FOO(s: string) {
    Console.log(s);
}

let str = "123";
if (T.isValidStr(str)) {
    FOO(str);
}