interface IGate {
    inputA: number;
    inputB?: number;
    output: number;
}

abstract class UnaryGate implements IGate {
    public inputA: number;
    public output: number;

    constructor(input: number) {
        this.inputA = input;
        this.output = undefined;
    }   
}

abstract class BinaryGate implements IGate {
    public inputA: number;
    public inputB: number;
    public output: number;

    constructor(inputA: number, inputB: number) {
        this.inputA = inputA;
        this.inputB = inputB;
        this.output = undefined;
    }   
}

class AndGate extends BinaryGate {

    constructor(inputA: number, inputB: number) {
        super(inputA, inputB);
    }

    performGateLogic(): number {
       return (this.inputA === 1 && this.inputB === 1)? 1: 0;  
    }
}

class OrGate extends BinaryGate {

    constructor(inputA: number, inputB: number) {
        super(inputA, inputB);
    }

    performGateLogic(): number {
        return (this.inputA === 1 || this.inputB === 1)? 1: 0;  
    }
 }

class NotGate extends UnaryGate {

    constructor(input: number) {
       super(input);
    }

    performGateLogic(): number {
        return (this.inputA === 1)? 0: 1;  
    }
}

