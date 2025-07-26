async function fetchWithAutoRetry(fetcher, maximumRetryCount) 
{ 
  try{
    let value = await fetcher();
    if(value)
      return "Success!"
  } catch(err) {
     let count = 1;
     while(count <= maximumRetryCount) {
       try{
         let value = await fetcher();
         if(value)
          return "Success!"
       }catch(err) {
         if(count === maximumRetryCount) {
            return "Failed after "+maximumRetryCount+" retries"
         }
         count++;         
       }
     }
  } 
}
module.exports = fetchWithAutoRetry;
