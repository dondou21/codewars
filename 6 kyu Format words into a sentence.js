function formatWords(words){
  
  let string = '' ;
  if(words){
    let words1 = words.filter( function(e){ return e;});
  
  if(words1.length > 1){
    
    for( let i = 0; i < words1.length-2; i ++)
    {
      string += words1[i] + ', '
    }
  
  return (string += words1[words1.length -2] + ' and ' + words1[words1.length -1]);;
  }else if (words1.length <= 1)
    {
      return words1.join('');
    }
  }else{
    return ("");
  }
}
