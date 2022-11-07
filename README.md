#### Usage
- [LOG📖](#日志)

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
// true at Object.<anonymous> (/examples/test.ts:27:9)
// true at Object.<anonymous> (/examples/test.ts:28:9)
// true at Object.<anonymous> (/examples/test.ts:29:9)
// true at Object.<anonymous> (/examples/test.ts:30:9)
```