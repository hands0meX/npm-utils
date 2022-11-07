import { _ } from "../src/dev";
import { Console } from "../src/index";


//LOG
Console.DIR = process.cwd();
Console.log(123);
Console.table(["foo", "bar"]);
Console.error("warning");




// _ TYPE_TEST
const fn = () => {};
const a = 1;
const b = {};
const c = [];
const d = [1];
const e = {foo: 'bar'};
const f = '';
const g = "123";
Console.log(_.isFn(fn));
Console.log(_.isNum(a));
Console.log(_.isObj(b));
Console.log(_.isArray(c));
Console.log(_.isValidArray(d));
Console.log(_.isValidObj(e));
Console.log(_.isStr(f));
Console.log(_.isValidStr(g));
// true at Object.<anonymous> (/examples/test.ts:23:9)
// true at Object.<anonymous> (/examples/test.ts:24:9)
// true at Object.<anonymous> (/examples/test.ts:25:9)
// true at Object.<anonymous> (/examples/test.ts:26:9)
// 1 at Object.<anonymous> (/examples/test.ts:27:9)
// 1 at Object.<anonymous> (/examples/test.ts:28:9)
// true at Object.<anonymous> (/examples/test.ts:29:9)
// 3 at Object.<anonymous> (/examples/test.ts:30:9)