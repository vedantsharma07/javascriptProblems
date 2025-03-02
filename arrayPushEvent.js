// Problem is to call a callback method whenver array.push is done.
// Attach an event to Push method of Array
const arr = [9, 2, 3, 4];
const originalPush = Array.prototype.push;

Array.prototype.push = function(...args) {
    if(this.pushCb) {
       this.pushCb(...args); 
    }
    const result = originalPush.apply(this, args);
    return result; 
}

Array.prototype.setPushCb = function(callback) {
    this.pushCb = callback;
}


arr.setPushCb(()=> console.log('pushed '));   

console.log(arr.push(5));
console.log(arr.push(6));
console.log(arr);

// pushed 
// 5
// pushed 
// 6
// [ 9, 2, 3, 4, 5, 6, pushCb: [Function (anonymous)] ]
