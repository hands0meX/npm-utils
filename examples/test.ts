import { T, Timer } from "../src/dev";
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
const e = { foo: "bar" };
const f = "";
const g = "123";
Console.log(T.isFn(fn));
Console.log(T.isNum(a));
Console.log(T.isObj(b));
Console.log(T.isArray(c));
Console.log(T.isValidArray(c));
Console.log(T.isValidArray(d));
Console.log(T.isValidObj(e));
Console.log(T.isStr(f));
Console.log(T.isValidStr(f));
Console.log(T.isValidStr(g));
// true at Object.<anonymous> (/examples/test.ts:23:9)
// true at Object.<anonymous> (/examples/test.ts:24:9)
// true at Object.<anonymous> (/examples/test.ts:25:9)
// true at Object.<anonymous> (/examples/test.ts:26:9)
// 1 at Object.<anonymous> (/examples/test.ts:27:9)
// 1 at Object.<anonymous> (/examples/test.ts:28:9)
// true at Object.<anonymous> (/examples/test.ts:29:9)
// 3 at Object.<anonymous> (/examples/test.ts:30:9)

// Timer
let bubbleCount = 0;
const timerFn = (...args) => {
	Console.log("bubble count", ++bubbleCount);
	Console.log("params", args);
};

let testTimer: undefined | NodeJS.Timer;
const NOW = Date.now();
const debounceImplFn = Timer.debounce(timerFn, 1000);
const throttleImplFn = Timer.throttle(timerFn, 600);
testTimer = setInterval(() => {
	if (Date.now() - NOW > 3000) {
		clearInterval(testTimer);
		testTimer = undefined;
	}
	debounceImplFn("debounce", "foo");
	throttleImplFn("throttle", "bar");
}, 16);
