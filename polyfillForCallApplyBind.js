const parent = {
    name: 'parent',
    city: 'Pune',
    getIntro: function(args) {
        console.log('Hi this is me '+this.name +'-'+ args);
    }
}
const child = {
    name: 'child'
}

// call
parent.getIntro.call(child, 'punit from call');

// myCall
Function.prototype.myCall = function(context, ...args) {
    let fn = this;
    if(typeof fn !== 'function') {
        throw new Error(this+"Its not callable");
    }
    context.fn = fn;
    context.fn(...args);
}
parent.getIntro.myCall(child, 'punit from myCall');


parent.getIntro.apply(child, ['punit from apply']);

// myCall
Function.prototype.myApply = function(context, args) {
    let fn = this;
    if(typeof fn !== 'function') {
        throw new Error(this+"Its not callable");
    }
    context.fn = fn;
    context.fn(...args);
}

parent.getIntro.myApply(child, ['punit from myApply']);


const newFunction = parent.getIntro.bind(child);
newFunction(['punit from bind']);


Function.prototype.myBind = function(context, ...outerArgs) {
    let fn=this;
    if(typeof fn !== 'function') {
        throw new Error(this+"Its not callable");
    }
    return function(...innerArgs) {
        context.fn = fn;
        return context.fn(...outerArgs, ...innerArgs);
    }
}

const newFunctionFromMyBind = parent.getIntro.myBind(child,);
newFunctionFromMyBind();
