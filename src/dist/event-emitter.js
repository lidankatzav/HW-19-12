var EventEmitter = /** @class */ (function () {
    function EventEmitter(callbacksListPerEvent) {
        if (callbacksListPerEvent === void 0) { callbacksListPerEvent = {}; }
        this.callbacksListPerEvent = callbacksListPerEvent;
    }
    EventEmitter.prototype.subscribe = function (eventName, callbackFunc) {
        if (eventName in this.callbacksListPerEvent) {
            this.callbacksListPerEvent[eventName].push(callbackFunc);
        }
        else {
            this.callbacksListPerEvent[eventName] = [callbackFunc];
        }
        console.log(this.callbacksListPerEvent);
    };
    EventEmitter.prototype.emit = function (eventName, eventProps) {
        if (eventName in this.callbacksListPerEvent) {
        }
    };
    return EventEmitter;
}());
var eventEmitter = new EventEmitter();
var stamFunc = function () {
    console.log("hi");
};
var stamFunc2 = function () {
    console.log("hi");
};
eventEmitter.subscribe('keydown', stamFunc);
eventEmitter.subscribe('keydown', stamFunc2);
