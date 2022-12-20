
class EventEmitter {

    private callbacksListPerEvent: { [key: string]: Function[] }; // { eventName: [callbacks functions], ... }
    
    constructor(callbacksListPerEvent =  {}) {
        this.callbacksListPerEvent = callbacksListPerEvent;
    }

    subscribe(eventName: string, callbackFunc: Function): {unsubscribe: Function} {
        if(eventName in this.callbacksListPerEvent) {
            if(!this.callbacksListPerEvent[eventName].includes(callbackFunc)) {
                this.callbacksListPerEvent[eventName].push(callbackFunc);
            }
        }
        else {
            this.callbacksListPerEvent[eventName] = [callbackFunc];
        }
        console.log(this.callbacksListPerEvent);
        return {
            unsubscribe: () => this.unsubscribe(eventName, callbackFunc)
        };
    }

    emit(eventName: string, eventProps: {[key: string]: string}): void {
        if(eventName in this.callbacksListPerEvent) {
            this.callbacksListPerEvent[eventName].forEach((callbackFunc) => 
            callbackFunc(eventProps))
        }
    }

    unsubscribe(eventName: string, callbackFuncToRemove: Function): void {
        this.callbacksListPerEvent[eventName] = this.callbacksListPerEvent[eventName].filter((callbackFunc) => callbackFunc !== callbackFuncToRemove);
        if(this.callbacksListPerEvent[eventName].length === 0) {
            this.callbacksListPerEvent[eventName] = undefined;
        }
        console.log(this.callbacksListPerEvent);
    }
}

const logFunc1 = (props: { key: string; }): void => {
    console.log(props.key);
}

const logFunc2 = (props: { key: string; }): void => {
    console.log(props.key);
}

const eventEmitter: EventEmitter = new EventEmitter();

const keydownSubscription1 = eventEmitter.subscribe('keydown', logFunc1);
const keydownSubscription2 = eventEmitter.subscribe('keydown', logFunc2);

eventEmitter.emit('keydown', {key: 'Enter'});
keydownSubscription1.unsubscribe();
eventEmitter.emit('keydown', {key: 'Enter'});
const keydownSubscription3 = eventEmitter.subscribe('keydown', logFunc1);
eventEmitter.emit('keydown', {key: 'Enter'});


