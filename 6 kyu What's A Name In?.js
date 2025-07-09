function nameInStr(str, name){
  str = str.toLowerCase().split('');
  name = name.toLowerCase().split('');
 
  let i = 0;
  let count = 0;

  for(let j = 0; j < str.length; j++)
  {
      if(str [j] === name[i]){
        count ++;
        i++;
    }
  }
  
  return count === name.length;
  
}
