Array.prototype.myReduce = function (callback, ...args) {
  // your code here
  if(this.length === 0) {
    if(args?.length === 0)
      throw "Initial Val is manadatory"
    else 
      return args[0];
  }
  if(typeof callback !== 'function') {
    throw "callback is not a function"
  }
  let acc;
  let i=0;
  if(args?.length > 0) {
    acc = args[0];
  } else {
    acc = this[i++];
  }

  for(i;i<this.length;i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
}
