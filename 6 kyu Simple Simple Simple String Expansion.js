function stringExpansion(s) {
  // Good luck!
  let arr = s.split('');
  let newstring ='';
  let count = 1;
  
  for(let char of arr) {
    if(!isNaN(char)){
      count = Number(char);
    }else {
      newstring += char.repeat(count);
    }
  }
  
  return newstring;
  
}
