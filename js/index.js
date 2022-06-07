
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
      if (this.displayValue.slice(-1) === this.operator){
        this.displayValue = this.displayValue.slice(0, -1) + operator;
        this.display.innerText = this.displayValue;
        this.operator = operator;
      } else { 
        this.calculate();
        this.chooseOperator(operator);
      }
    } 
  }
  newElement(result) {

    var li = document.createElement("li");
    li.className = "list-item";
    li.addEventListener("click", () => {
      let hist = li.innerText;
      this.displayValue = hist.slice(hist.indexOf("=") + 2);
      this.display.innerText = this.displayValue;
    });
    var t = document.createTextNode(result);
    li.appendChild(t);
    if (result === '') {
      alert("Error");
    } else {
      document.querySelector("#List").appendChild(li);
    }
  }

  clearHistory() {
    document.querySelector("#List").innerHTML = "";
  }
  

  calculate() {
    let hist = this.displayValue;
    let result = "";   
    this.secondOperand = this.displayValue.slice(this.displayValue.indexOf(this.operator) + 1);
    const firstOperand = parseFloat(this.firstOperand);
    const secondOperand = parseFloat(this.secondOperand);
    console.log(secondOperand);
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
    console.log(result);
    hist = hist + " = " + result;
    this.newElement(hist);
  }
};

const calculator = new Calculator();







  

