declare class Subscribe {
    callBackFns: Function[];
    eventsMap: Map<string, any>;
    add(evName: string, callbackFn: Function): void;
    get(evName: string): any;
    del(evName: string): boolean;
}
export declare class EventBus {
    subscribe: Subscribe;
    constructor();
    fire(eventName: string, payload: any): void;
    on(eventName: string, callbackFn: Function): void;
    off(eventName: string): boolean;
    once(eventName: string): void;
    hasEvent(eventName: string): boolean;
}
export {};
