function score( dice ) {
  // Fill me in!
  
  let x1=0, x2=0, x3=0, x4=0, x5=0, x6=0;
  var score = 0;
  for(let i =0; i < dice.length; i++)
    {
      
      if(dice[i] === 1)
        {
          x1 +=1;
        }else if(dice[i] === 2)
          {
            x2 +=1;
          }else if(dice[i] === 3)
          {
            x3 +=1;
          }else if(dice[i] === 4)
          {
            x4 +=1;
          }else if(dice[i] === 5)
          {
            x5 +=1;
          }else if (dice[i] === 6)
          {
            x6 +=1;
          }
    }
  // for 1's
  if(x1 >= 3)
    {
      score += 1000;
      x1 -=3;
    }
  score += x1*100;

  // for 2's
  if(x2 >= 3)
    {
      score += 200;
    }
  
  // for 3's
  if(x3 >= 3)
    {
      score += 300;
    }
  
  // for 4's
  if(x4 >= 3)
    {
      score += 400;
    }
  
  // for 5's
  if(x5 >= 3)
    {
      score += 500;
      x5 -= 3;
    }
  score += x5*50;
  
  // for 1's
  if(x6 >= 3)
    {
      score += 600;
    }
  
  return score;
}
