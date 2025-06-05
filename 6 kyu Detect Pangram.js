function isPangram(string){
  //...
  string = string.toUpperCase();
  let arr = string.split('')

  let alphabet = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
  
  for(let i = 0; i < alphabet.length; i++){
    if(!arr.includes(alphabet[i])){
      return false;
    } 
  }
  return true;
  
