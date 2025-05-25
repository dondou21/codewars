function evenNumbers(array, number) {  
  
  let arr = array.filter((num) => num%2 === 0);
  let newArray = arr.slice(-number);
  
   return newArray ;
 
}
