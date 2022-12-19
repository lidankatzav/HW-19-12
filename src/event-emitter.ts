class EventEmitter {

    private callbacksListPerEvent: { [key: string]: Function[] }; // { eventName: [callbacks functions], ... }
    
    constructor(callbacksListPerEvent =  {}) {
        this.callbacksListPerEvent = callbacksListPerEvent;
    }

    subscribe(eventName: string, callbackFunc: Function): void {
        if(eventName in this.callbacksListPerEvent) {
            this.callbacksListPerEvent[eventName].push(callbackFunc);
        }
        else {
            this.callbacksListPerEvent[eventName] = [callbackFunc];
        }
        console.log(this.callbacksListPerEvent);
    }

    emit(eventName: string, eventProps: object): void {
        if(eventName in this.callbacksListPerEvent) {
            
        }
    }
}

const eventEmitter: EventEmitter = new EventEmitter();

const stamFunc = () => {
    console.log("hi");
}

const stamFunc2 = () => {
    console.log("hi");
}

eventEmitter.subscribe('keydown', stamFunc);
eventEmitter.subscribe('keydown', stamFunc2);

