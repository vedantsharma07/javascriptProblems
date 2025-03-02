// In leadinf debounce only the function is invoked when the timer is null, and timer is null at beginning, and at the end.
// At the end after the delay it gets null, so that if invoked it should get called.
// Example is button clicking continously, on first click it will get invoked

function leadingDebounce(fn, delay) {
    let timer=null;
    return function(...args) {
        let context=this;
        if(timer === null) {
            fn.apply(context, args)
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer=null
        }, delay);
    };
}

const sayHello = () => console.log('hello');

const deboundedMethod = leadingDebounce(sayHello, 300);

deboundedMethod();
deboundedMethod();
deboundedMethod();
deboundedMethod();

// hello
