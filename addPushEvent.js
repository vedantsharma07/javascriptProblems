// Here we have added an event on Push method of an array


let originalPush = Array.prototype.push;

Array.prototype.push = function(...args) {
    let result = originalPush.apply(this, args);
    if(this.onPush)
        this.onPush(args)
    return result;
}

Array.prototype.setPushCb = function(callback) {
    if(typeof callback !== 'function') {
        throw 'Error';
    }
    this.onPush = callback;
}

let arr = [];

arr.setPushCb((items) => {
    console.log('Items pushed', items);    
})

arr.push(5);
arr.push(6);
arr.push(7);

console.log('Array ',arr);
