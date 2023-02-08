import { Console } from "../LogHelp";
import { T } from "../TypeTest";

class Subscribe {
    callBackFns: Function[] = [];
    eventsMap = new Map<string, any>();

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

    del(evName: string) {
        return this.eventsMap.delete(evName);
    }
}
export class EventBus {
    private subscribe: Subscribe;
    constructor() {
        this.subscribe = new Subscribe();
    }
    public fire(eventName: string, payload?: any) {
        const fns = this.subscribe.get(eventName);
        fns.forEach((fn) => fn(payload));
    }

    public on(eventName: string, callbackFn: Function, scope = this) {
        this.subscribe.add(eventName, callbackFn.bind(scope));
    }

    public off(eventName: string) {
        // TODO: insert scope
        return this.subscribe.del(eventName);
    }
    public once(eventName: string) {}

    public hasEvent(eventName: string) {
        return this.subscribe.eventsMap.has(eventName);
    }
}

// const emitter = new EventBus();
// emitter.on("foo", (payload) => {
//     Console.log(payload);
// });
