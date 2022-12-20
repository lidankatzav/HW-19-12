var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UnaryGate = /** @class */ (function () {
    function UnaryGate(input) {
        this.inputA = input;
    }
    UnaryGate.prototype.getOutput = function () {
        return this.output;
    };
    return UnaryGate;
}());
var BinaryGate = /** @class */ (function () {
    function BinaryGate(inputA, inputB) {
        this.inputA = inputA;
        this.inputB = inputB;
    }
    BinaryGate.prototype.getOutput = function () {
        return this.output;
    };
    return BinaryGate;
}());
var AndGate = /** @class */ (function (_super) {
    __extends(AndGate, _super);
    function AndGate(inputA, inputB) {
        var _this = _super.call(this, inputA, inputB) || this;
        _this.output = _this.performGateLogic();
        return _this;
    }
    AndGate.prototype.performGateLogic = function () {
        return (this.inputA === 1 && this.inputB === 1) ? 1 : 0;
    };
    return AndGate;
}(BinaryGate));
var OrGate = /** @class */ (function (_super) {
    __extends(OrGate, _super);
    function OrGate(inputA, inputB) {
        var _this = _super.call(this, inputA, inputB) || this;
        _this.output = _this.performGateLogic();
        return _this;
    }
    OrGate.prototype.performGateLogic = function () {
        return (this.inputA === 1 || this.inputB === 1) ? 1 : 0;
    };
    return OrGate;
}(BinaryGate));
var NotGate = /** @class */ (function (_super) {
    __extends(NotGate, _super);
    function NotGate(input) {
        var _this = _super.call(this, input) || this;
        _this.output = _this.performGateLogic();
        return _this;
    }
    NotGate.prototype.performGateLogic = function () {
        return (this.inputA === 1) ? 0 : 1;
    };
    return NotGate;
}(UnaryGate));
// Main
var numbersArrayFirstCol = [0, 0, 1, 1];
var numbersArraySecondCol = [0, 1, 0, 1];
for (var i = 0; i < numbersArrayFirstCol.length; i++) {
    var firstInput = numbersArrayFirstCol[i];
    var secondInput = numbersArraySecondCol[i];
    var andGateOutput = new AndGate(firstInput, secondInput).getOutput();
    var nandGateOutput = new NotGate(andGateOutput).getOutput();
    console.log("Input A ".concat(firstInput, " Input B ").concat(secondInput, " Output ").concat(nandGateOutput));
}
