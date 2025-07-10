function validate(message) {
  const array = message.split(' ');
  let count = 0;
  
  if(array.length == 8 )
    { 
      array[0] === 'MDZHB'?count++: count;
      console.log(array[1].split(''))
    }else 
      {
        return false;
      }
  
}
