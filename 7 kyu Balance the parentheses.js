function fixParentheses(str) {
  let balance = 0;    
  let open = 0; 

  const array = str.split(''); 
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '(') {
      balance++;
    } else if (array[i] === ')') {
      if (balance === 0) {
      
        open++;
      } else {
        balance--;
      }
    }
  }
  return '('.repeat(open) + str + ')'.repeat(balance);
}
