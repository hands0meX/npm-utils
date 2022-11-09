#### Usage
- [LOG📖](#LOG)
- [TYPE_TEST🤔](#type_test)

##### LOG
``` ts
    import { Console } from '@car_han/utils';
    Console.DIR = process.cwd();    //Set the root directory path of your project

    Console.log(123);
    // res => at ${FnName} (/examples/test.ts:4:9)

    Console.table(["foo", "bar"]);
    // ┌─────────┬────────┐
    // │ (index) │ Values │
    // ├─────────┼────────┤
    // │    0    │ 'foo'  │
    // │    1    │ 'bar'  │
    // └─────────┴────────┘
    // at ${FnName} (/examples/test.ts:4:9)
```

> 

##### TYPE_TEST
``` ts
// _ TYPE_TEST
const fn = () => {};
const a = 1;
const b = {};
const c = [];
const d = [1];
const e = {foo: 'bar'};
const f = '';
const g = "123";
Console.log(T.isFn(fn));
Console.log(T.isNum(a));
Console.log(T.isObj(b));
Console.log(T.isArray(c));
Console.log(T.isValidArray(d));
Console.log(T.isValidObj(e));
Console.log(T.isStr(f));
Console.log(T.isValidStr(g));

// true at Object.<anonymous> (/examples/test.ts:23:9)
// true at Object.<anonymous> (/examples/test.ts:24:9)
// true at Object.<anonymous> (/examples/test.ts:25:9)
// true at Object.<anonymous> (/examples/test.ts:26:9)
// true at Object.<anonymous> (/examples/test.ts:27:9)
// true at Object.<anonymous> (/examples/test.ts:28:9)
// true at Object.<anonymous> (/examples/test.ts:29:9)
// true at Object.<anonymous> (/examples/test.ts:30:9)
```

##### Timer
```ts
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

bubble count 1 at timerFn (/examples/test.ts:41:10)
params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
bubble count 2 at timerFn (/examples/test.ts:41:10)
params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
bubble count 3 at timerFn (/examples/test.ts:41:10)
params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
bubble count 4 at timerFn (/examples/test.ts:41:10)
params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
bubble count 5 at timerFn (/examples/test.ts:41:10)
params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
bubble count 6 at timerFn (/examples/test.ts:41:10)
params [ 'debounce', 'foo' ] at timerFn (/examples/test.ts:42:10)
```