
const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const toString = (x) => `${x}`;

// exceutes the functions from left to right
function pipe(...args) {
    return function(initialValue) {
        let res;
        res = args.reduce((acc, curr) => {
            return curr(acc);
        }, initialValue);
        return res;
    }
}

const result1 = pipe(add5, multiply2, subtract3)(10);
console.log(result1);


// exceutes the functions from right to left
function compose(...args) {
    return function(initialValue) {
        let res;
        res = args.reduceRight((acc, curr) => {
            return curr(acc);
        }, initialValue);
        return res;
    }
}
const result2 = compose(add5, multiply2, subtract3)(10);
console.log(result2);
