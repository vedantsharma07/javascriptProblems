function hello(messege) {
    console.log(messege);
}

function throttle(fn, delay) {
    let flag = true;
    return function(...args) {
        let context = this;
        if(flag) {
            fn.apply(context,args);
            flag=false;
            setTimeout(() => {
                flag=true;
            }, delay)
        }
    }
}

let throttledFunc = throttle(hello, 500);
throttledFunc('hello')
throttledFunc('hello')
throttledFunc('hello');
throttledFunc('hello')

setTimeout(() => {
    throttledFunc('hello')
}, 1000)
