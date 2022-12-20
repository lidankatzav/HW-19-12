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
    }   

    getOutput(): number {
        return this.output;
    }
}

abstract class BinaryGate implements IGate {
    public inputA: number;
    public inputB: number;
    public output: number;

    constructor(inputA: number, inputB: number) {
        this.inputA = inputA;
        this.inputB = inputB;
    } 
    
    getOutput(): number {
        return this.output;
    }
}

class AndGate extends BinaryGate {

    constructor(inputA: number, inputB: number) {
        super(inputA, inputB);
        this.output = this.performGateLogic();
    }

    performGateLogic(): number {
       return (this.inputA === 1 && this.inputB === 1)? 1: 0;  
    }
}

class OrGate extends BinaryGate {

    constructor(inputA: number, inputB: number) {
        super(inputA, inputB);
        this.output = this.performGateLogic();
    }

    performGateLogic(): number {
        return (this.inputA === 1 || this.inputB === 1)? 1: 0;  
    }
 }

class NotGate extends UnaryGate {

    constructor(input: number) {
       super(input);
       this.output = this.performGateLogic();
    }

    performGateLogic(): number {
        return (this.inputA === 1)? 0: 1;  
    }
}

// Main - Nand Gate

const numbersArrayFirstCol = [0,0,1,1];
const numbersArraySecondCol = [0,1,0,1];

for(let i=0; i<numbersArrayFirstCol.length; i++) {

    const firstInput: number = numbersArrayFirstCol[i];
    const secondInput: number = numbersArraySecondCol[i];

    const andGateOutput: number = new AndGate(firstInput, secondInput).getOutput();
    const nandGateOutput: number = new NotGate(andGateOutput).getOutput();

    console.log(  `Input A ${firstInput} Input B ${secondInput} Output ${nandGateOutput}`);
}
