// basic debouncing.
// Example is clicking on button, and on multiple clicks. it will get invoked on the last click when delay is passed
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        let context=this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const sayHello = () => console.log('hello');

const deboundedMethod = debounce(sayHello, 300);

deboundedMethod();
deboundedMethod();
deboundedMethod();
deboundedMethod();

setTimeout(() => deboundedMethod(), 400);

// hello --- invoked as it was last call, and after delay of 300ms it got invoked.
// hello ---- it got triggered after 400ms, and after that there was no furter call upto 300ms to clear this, hence called
