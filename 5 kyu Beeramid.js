
var beeramid = function(bonus, price) {
  
  let bill = 0;
  let level;
  
  for(let i = 1; i < 1000; i++)
    {
      bill = i*i * price;
      bonus -= bill;
      
      if(bonus < 0) {
      level = i-1;
      break
      }
    }
  return level;
  
}
