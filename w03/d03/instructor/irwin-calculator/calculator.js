class Calculator {
  constructor() {
    this.operandOne = 0;
    this.operandTwo = 0;
    this.operator = '';
    this.output = '';
    this.current = true;
  }

  add() {
    return this.operandOne + this.operandTwo;
  }

  subtract() {
    return this.operandOne - this.operandTwo;
  }

  multiply() {
    return this.operandOne * this.operandTwo;
  }

  divide() {
    return this.operandOne / this.operandTwo;
  }

  evaluate() {
    switch(this.operator) {
      case '+':
        this.output = this.add();
        break;
      case '−':
        this.output = this.subtract();
        break;
      case '×':
        this.output = this.multiply();
        break;
      case '÷':
        this.output = this.divide();
        break;
      default:
        break;
    }

    this.reset();
  }

  reset() {
    this.operandOne = '';
    this.operandTwo = '';
    this.operator = '';
    this.current = false;
  }
}
