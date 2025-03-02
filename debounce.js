

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = {leading: false, trailing: true}) {
  // your code here
    let timer=null;
    return function(...args) {
        let context=this;
        let isInvoked=false;
      //for invoking the leading true
        if(timer === null && option.leading) {
            func.apply(context, args)
            isInvoked= true;
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
          //for invoking the trailing true, but make sure it is not earlier invloked.
            if(option.trailing && !isInvoked) {
              func.apply(context, args);
            }
            timer=null;
        }, wait);
    }
}
