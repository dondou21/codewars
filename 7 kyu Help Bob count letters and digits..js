function countLettersAndDigits(input) {
  let letter = 'QWERTYUIOPASDFGHJKLZXCVBNM0987654321';
  
  let arr = input.split('');
  
  let count =0;
  
  for(let char of arr)
    {
      if( letter.includes(char.toUpperCase()))
        {
          count ++;
        }
    }
  
  return count;
}
