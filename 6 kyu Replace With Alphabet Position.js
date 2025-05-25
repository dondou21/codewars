function alphabetPosition(text) {
  
  let alph = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase();
  let position;
  let char = [];
  
  for(let i = 0; i < text.length; i++)
    {
      position = alph.indexOf(text[i]) +1;
      if(position !== 0) 
      {
        char.push(position);
      }
      
    }
  return char.join(' ');
  
}
