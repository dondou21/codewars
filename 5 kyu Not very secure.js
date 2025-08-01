function alphanumeric(string){
  const array = string.split("")
  const alphabetNum = /^[a-zA-Z0-9]$/
  
  if(string === "") return false
  
  for(let i = 0; i < array.length; i++)
    {
      if(!alphabetNum.test(array[i]))
      {
        return false;
      } 
    }
  
  return true
}
