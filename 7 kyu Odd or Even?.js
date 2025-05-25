function oddOrEven(array) {
   //enter code here
  let result , sum;
  if(array.length === 0)
    {
      result = 'even';
    }else
      {
         sum = array.reduce((acc,num) => acc += num);
        sum%2 === 0?result = 'even': result = 'odd';
      }
      
  
  return result;
}
