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