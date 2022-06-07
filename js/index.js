
let Calculator = class {
  constructor() {
    this.display = document.querySelector("#display");
    this.clearButton = document.querySelector("#clear");
    this.backspaceButton = document.querySelector("#backspace");
    this.numbers = document.querySelectorAll(".number-key");
    this.operators = document.querySelectorAll(".operator");
    this.decimalButton = document.querySelector("#decimal");
    this.equalButton = document.querySelector("#equals");
    this.singButton = document.querySelector("#sign");
    this.displayValue = "";
    this.firstOperand = "";
    this.secondOperand = "";
    this.operator = "";
    this.lastResult = "";
    console.log("Calculator initialized");
    this.init();
  }

  init() {
    this.clearButton.addEventListener("click", () => {
      this.clear();
    });
    this.backspaceButton.addEventListener("click", () => {
      this.backspace();
    });
    this.numbers.forEach((number) => {
      number.addEventListener("click", () => {
        this.appendNumber(number.innerText);
      });
    });
    this.operators.forEach((operator) => {
      operator.addEventListener("click", () => {
        this.chooseOperator(operator.innerText);
      });
    });
    this.decimalButton.addEventListener("click", () => {
      this.appendDecimal();
    });
    this.equalButton.addEventListener("click", () => {
      this.calculate();
    });
    this.singButton.addEventListener("click", () => {
      this.sing();
    });
  }

  clear() {
    this.displayValue = "";
    this.firstOperand = "";
    this.secondOperand = "";
    this.operator = "";
    this.display.innerText = this.displayValue;
  }

  sing() {
    if (this.displayValue === "") return;
    if (this.displayValue.includes("-")) {
      this.displayValue = this.displayValue.slice(1);
    } else {
      this.displayValue = "-" + this.displayValue;
    }
    this.display.innerText = this.displayValue;
  }
  backspace() {
    this.displayValue = this.displayValue.slice(0, -1);
    this.display.innerText = this.displayValue;
  }
  appendNumber(number) {
    this.displayValue += number;
    this.display.innerText = this.displayValue;
  }
  appendDecimal() {
    if (!this.displayValue.includes(".")) {
      this.displayValue += ".";
      this.display.innerText = this.displayValue;
    }
  }
  
  chooseOperator(operator) {
    if (this.displayValue === "") return;
    if (this.firstOperand === "") {
      this.firstOperand = this.displayValue;
      this.displayValue += operator;
      this.display.innerText = this.displayValue;
      this.operator = operator;
    } else if (this.operator) {
      this.calculate();
      this.chooseOperator(operator);
    }
  }

  calculate() {
    let result = "";
    console.log(this.firstOperand.length+1);
    this.secondOperand = this.displayValue.slice(this.firstOperand.length+1);
    const firstOperand = parseFloat(this.firstOperand);
    const secondOperand = parseFloat(this.secondOperand);
    if (this.operator === "+") {
      result = firstOperand + secondOperand;
    } else if (this.operator === "-") {
      result = firstOperand - secondOperand;
    } else if (this.operator === "×") {
      result = firstOperand * secondOperand;
    }else{
      result = firstOperand / secondOperand;
    } 
    this.displayValue = result;
    this.display.innerText = this.displayValue;
    this.firstOperand = "";
    this.secondOperand = "";
    this.operator = "";
    this.newElement(result);
  }

  

};









  

