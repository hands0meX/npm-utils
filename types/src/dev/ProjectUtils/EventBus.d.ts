export declare class EventBus {
    private subscribe;
    constructor();
    fire(eventName: string, payload?: any): void;
    on(eventName: string, callbackFn: Function, scope?: this): void;
    off(eventName: string): boolean;
    once(eventName: string): void;
    hasEvent(eventName: string): boolean;
}
