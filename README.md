#### Usage

-   [LOG📖](#LOG)
-   [TYPE_TEST🤔](#type_test)
    -   [is\*](#is)
    -   [typeOf](#typeof)
-   [Time📅](#time)
-   [Timer⌚️](#timer)
-   [DataUtils](#dataUtils)
-   [HttpHelper]

> Try it in the **example** directory😊

##### LOG

```ts
import { Console } from "@car_han/utils";
Console.DIR = process.cwd(); //Set the root directory path of your project

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

###### is\*

> Determine the type of determination

```ts
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

###### typeOf

> When you are not sure about the type, determine the type it belongs to
> **includes**

-   string
-   object
-   array
-   number
-   null
-   undefined
-   regex
-   date

```ts
// typeOf
Console.log(T.typeOf(Symbol("a")));
Console.log(T.typeOf(new Date()));
Console.log(T.typeOf(undefined));
Console.log(T.typeOf(null));
// symbol at Object.<anonymous> (/examples/test.ts:39:9)
// date at Object.<anonymous> (/examples/test.ts:40:9)
// undefined at Object.<anonymous> (/examples/test.ts:41:9)
// null at Object.<anonymous> (/examples/test.ts:42:9)
```

##### Time

> Y => Year, M => Month, D => Date, h => hour, m: minutes, s: seconds.

```ts
console.log(Time.datefmt(new Date())); // default
// 2022/11/14 15:42:20
console.log(Time.datefmt(new Date(), "D-m")); // change fmtPattern
// 14/45
console.log(Time.datefmt(new Date(), undefined, ":*")); // change fmt modifer
// 2022:11:14 15*47*13
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

// bubble count 1 at timerFn (/examples/test.ts:41:10)
// params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
// bubble count 2 at timerFn (/examples/test.ts:41:10)
// params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
// bubble count 3 at timerFn (/examples/test.ts:41:10)
// params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
// bubble count 4 at timerFn (/examples/test.ts:41:10)
// params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
// bubble count 5 at timerFn (/examples/test.ts:41:10)
// params [ 'throttle', 'bar' ] at timerFn (/examples/test.ts:42:10)
// bubble count 6 at timerFn (/examples/test.ts:41:10)
// params [ 'debounce', 'foo' ] at timerFn (/examples/test.ts:42:10)
```

##### DataUtils

-   String
    generate random string, default len: 16

```ts
Console.log(Str.rollingRandomString(32));
// bbplbmjpdzmnlujnfvdpufdnhthewkzz at Object.<anonymous> (/examples/test.ts:68:9)
```

##### HttpHelper

-   uri
    -   obj2query

```ts
const res = HttpHelper.obj2Query({
    test: 13,
    hh: "tt",
});

Console.log(res);
//?test=13&hh=tt at Object.<anonymous> (/src/dev/HttpHelper.ts:27:9)
```
