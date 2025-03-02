// Problem is to call a callback method whenver array.push is done.
// Attach an event to Push method of Array
// Only push element when element is even number, please modify the original array.push method.

const arr = [9, 2, 3, 4];
const originalPush = Array.prototype.push;

Array.prototype.push = function(...args) {
    let toAdd;
    if(this.pushCb) {
       toAdd = this.pushCb(...args); 
    }
    const result = toAdd ? originalPush.apply(this, args): 'Cannot Push';
    return result; 
}

Array.prototype.setPushCb = function(callback) {
    this.pushCb = callback;
}


arr.setPushCb((ele)=> {
    if(ele % 2 === 0) {
        return true
    } else 
        return false;
});   

console.log(arr.push(5));
console.log(arr.push(6));
console.log(arr);

// Cannot Push
// 5
// [ 9, 2, 3, 4, 6, pushCb: [Function (anonymous)] ]
