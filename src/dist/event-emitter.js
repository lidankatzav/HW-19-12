var EventEmitter = /** @class */ (function () {
    function EventEmitter(callbacksListPerEvent) {
        if (callbacksListPerEvent === void 0) { callbacksListPerEvent = {}; }
        this.callbacksListPerEvent = callbacksListPerEvent;
    }
    EventEmitter.prototype.subscribe = function (eventName, callbackFunc) {
        var _this = this;
        if (eventName in this.callbacksListPerEvent) {
            if (!this.callbacksListPerEvent[eventName].includes(callbackFunc)) {
                this.callbacksListPerEvent[eventName].push(callbackFunc);
            }
        }
        else {
            this.callbacksListPerEvent[eventName] = [callbackFunc];
        }
        console.log(this.callbacksListPerEvent);
        return {
            unsubscribe: function () { _this.unsubscribe(eventName, callbackFunc); }
        };
    };
    EventEmitter.prototype.emit = function (eventName, eventProps) {
        if (eventName in this.callbacksListPerEvent) {
            this.callbacksListPerEvent[eventName].forEach(function (callbackFunc) {
                return callbackFunc(eventProps);
            });
        }
    };
    EventEmitter.prototype.unsubscribe = function (eventName, callbackFuncToRemove) {
        this.callbacksListPerEvent[eventName] = this.callbacksListPerEvent[eventName].filter(function (callbackFunc) { return callbackFunc !== callbackFuncToRemove; });
        if (this.callbacksListPerEvent[eventName].length === 0) {
            this.callbacksListPerEvent[eventName] = undefined;
        }
        console.log(this.callbacksListPerEvent);
    };
    return EventEmitter;
}());
var logFunc1 = function (props) {
    console.log(props.key);
};
var logFunc2 = function (props) {
    console.log(props.key);
};
var eventEmitter = new EventEmitter();
var keydownSubscription1 = eventEmitter.subscribe('keydown', logFunc1);
var keydownSubscription2 = eventEmitter.subscribe('keydown', logFunc2);
eventEmitter.emit('keydown', { key: 'Enter' });
keydownSubscription1.unsubscribe();
eventEmitter.emit('keydown', { key: 'Enter' });
var keydownSubscription3 = eventEmitter.subscribe('keydown', logFunc1);
eventEmitter.emit('keydown', { key: 'Enter' });
