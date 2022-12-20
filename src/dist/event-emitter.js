var EventEmitter = /** @class */ (function () {
    // { eventName: [callbacks functions], ... }
    function EventEmitter(callbacksListPerEvent) {
        if (callbacksListPerEvent === void 0) { callbacksListPerEvent = {}; }
        this.callbacksListPerEvent = callbacksListPerEvent;
    }
    EventEmitter.prototype.subscribe = function (eventName, callbackFunc) {
        // This method "subscribe" a callback function to some event.
        // Checking first if the event type is already exists in the dict, 
        // if not - adding the event (as a key) and the callback func in array (as value) to the dict.
        // Also checking if the callback func is alreay "subscribed" to the event. If it's, do nothing.
        // Returns an object with "unsubscribe" func.
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
            unsubscribe: function () { return _this.unsubscribe(eventName, callbackFunc); }
        };
    };
    EventEmitter.prototype.emit = function (eventName, eventProps) {
        // This method call to all the funcs that "subscribed" to some event,
        // by iterating the array of all functions linked to the same event in the dict.
        // Each func gets the event props as an argument. 
        if (eventName in this.callbacksListPerEvent) {
            this.callbacksListPerEvent[eventName].forEach(function (callbackFunc) {
                return callbackFunc(eventProps);
            });
        }
    };
    EventEmitter.prototype.unsubscribe = function (eventName, callbackFuncToRemove) {
        // This method does "unsubscribe" to some callback func linked to some event,
        // by deleting the callback func from the funcs array of the event in the dict.
        // If the event has no linked functions left - delete this event from the dict.
        this.callbacksListPerEvent[eventName] = this.callbacksListPerEvent[eventName].filter(function (callbackFunc) { return callbackFunc !== callbackFuncToRemove; });
        if (this.callbacksListPerEvent[eventName].length === 0) {
            this.callbacksListPerEvent[eventName] = undefined;
        }
        console.log(this.callbacksListPerEvent);
    };
    return EventEmitter;
}());
// Main 
// Testing on two callback funcs
var logFunc1 = function (props) {
    console.log(props.key);
};
var logFunc2 = function (props) {
    console.log(props.key);
};
// Create a new EventEmitter
var eventEmitter = new EventEmitter();
// Create two subscriptions to two funcs above with the event 'keydown'
var keydownSubscription1 = eventEmitter.subscribe('keydown', logFunc1);
var keydownSubscription2 = eventEmitter.subscribe('keydown', logFunc2);
eventEmitter.emit('keydown', { key: 'Enter' });
keydownSubscription1.unsubscribe();
eventEmitter.emit('keydown', { key: 'Enter' });
var keydownSubscription3 = eventEmitter.subscribe('keydown', logFunc1);
eventEmitter.emit('keydown', { key: 'Enter' });
// Expected output ---->
/*
{ keydown: [ [Function: logFunc1] ] }
{ keydown: [ [Function: logFunc1], [Function: logFunc2] ] }
Enter
Enter
{ keydown: [ [Function: logFunc2] ] }
Enter
{ keydown: [ [Function: logFunc2], [Function: logFunc1] ] }
Enter
Enter
*/
