Array.prototype.groupBy = function(fn){
  //this is my array on which this groupby will be called. 
 let values = this;
  // reduce will be returing an object aggregated
 return values.reduce((a,b) => {
   // check if the fn is function or property of an object like length
   let key = typeof fn === 'function' ? fn(b) : b[fn];
   // if new key , add currentelement in the new list
   if(!a[key]) {
     a[key] = [b];
   } else {
     // if ket exist , push currentelement in the list
     a[key] = [...a[key], b];
   }
   return a;
 }, {}) 
};
