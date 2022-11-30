import { Console } from "../LogHelp";
import { T } from "../TypeTest";

class Subscribe {
    callBackFns: Function[] = [];
    eventsMap: Map<string, any> = new Map();

    add(evName: string, callbackFn: Function) {
        const targetEventCbFns = this.get(evName);
        if (!T.isValidArray(targetEventCbFns)) {
            this.eventsMap.set(evName, [callbackFn]);
        } else {
            this.eventsMap.set(evName, [callbackFn, ...targetEventCbFns]);
        }
    }

    get(evName: string) {
        return this.eventsMap.get(evName) || [];
    }
}
class EventBus {
    foo: any;
    subscribe: any;
    constructor() {
        this.subscribe = new Subscribe();
    }
    fire(eventName: string, payload: any) {
        this.foo = 123;
        const fns = this.subscribe.get(eventName);
        fns.forEach((fn) => fn(payload));
    }

    on(eventName: string, callbackFn: Function) {
        this.subscribe.add(eventName, callbackFn);
    }
}

const emitter = new EventBus();
emitter.on("foo", (payload) => {
    Console.log(payload);
});
