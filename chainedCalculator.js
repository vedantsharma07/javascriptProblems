// calculator.add(3).multiply(4).subtract(5).getValue()

class Calculator {
    
    constructor(initalValue=0) {
        this.value = initalValue;
    }
    
    add = (val) => {
        this.value = this.value + val;
        return this;
    }
    
    multiply = (val) => {
        this.value = this.value * val;
        return this;
    }
    
    subtract = (val) => {
        this.value = this.value - val;
        return this;
    }
    
    getValue() {
        return this.value;
    }
    
}

const calculator = new Calculator(2);
const result = calculator.add(3).multiply(4).subtract(5).getValue();

console.log('result ',result);
