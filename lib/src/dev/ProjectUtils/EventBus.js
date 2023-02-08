"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
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
    del(evName) {
        return this.eventsMap.delete(evName);
    }
}
class EventBus {
    constructor() {
        this.subscribe = new Subscribe();
    }
    fire(eventName, payload) {
        const fns = this.subscribe.get(eventName);
        fns.forEach((fn) => fn(payload));
    }
    on(eventName, callbackFn) {
        this.subscribe.add(eventName, callbackFn);
    }
    off(eventName) {
        // TODO: insert scope
        return this.subscribe.del(eventName);
    }
    once(eventName) { }
    hasEvent(eventName) {
        return this.subscribe.eventsMap.has(eventName);
    }
}
exports.EventBus = EventBus;
// const emitter = new EventBus();
// emitter.on("foo", (payload) => {
//     Console.log(payload);
// });
