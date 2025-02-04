class Calculator {
    constructor(initialValue) {
        this.value = initialValue;
    }
    
    add(val) {
        this.value+=val
        return this
    }
    
    subtract(val) {
        this.value-=val;
        return this;
    }
    
    multiply(val) {
        this.value =this.value*val;
        return this;
    }
    
    getValue() {
        return this.value;
    }
}

const obj = new Calculator(2);
const res = obj.add(5).multiply(6).subtract(4).getValue();

console.log(res);
