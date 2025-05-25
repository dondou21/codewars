function orderWord(s){

  /*
  1. Convert string into an array
  2. Use sort method to sort the array
  3. Change the sorted array in to a string 
  */
  
  if(s === '' || s === null)
    {
      return 'Invalid String!';
    }else
      {
        let array = s.split('');
  
  array = array.sort();
  let string = array.join('');
  
  return string;
      }
  
}
