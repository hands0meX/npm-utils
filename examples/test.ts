import { Console } from "../src/index";
Console.DIR = process.cwd();
Console.log(123);
Console.table(["foo", "bar"]);
Console.error("warning");