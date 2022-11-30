"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogHelp_1 = require("../LogHelp");
const TypeTest_1 = require("../TypeTest");
class Subscribe {
    constructor() {
        this.callBackFns = [];
        this.eventsMap = new Map();
    }
    add(evName, callbackFn) {
        const targetEventCbFns = this.get(evName);
        if (!TypeTest_1.T.isValidArray(targetEventCbFns)) {
            this.eventsMap.set(evName, [callbackFn]);
        }
        else {
            this.eventsMap.set(evName, [callbackFn, ...targetEventCbFns]);
        }
    }
    get(evName) {
        return this.eventsMap.get(evName) || [];
    }
}
class EventBus {
    constructor() {
        this.subscribe = new Subscribe();
    }
    fire(eventName, payload) {
        this.foo = 123;
        const fns = this.subscribe.get(eventName);
        fns.forEach((fn) => fn(payload));
    }
    on(eventName, callbackFn) {
        this.subscribe.add(eventName, callbackFn);
    }
}
const emitter = new EventBus();
emitter.on("foo", (payload) => {
    LogHelp_1.Console.log(payload);
});
