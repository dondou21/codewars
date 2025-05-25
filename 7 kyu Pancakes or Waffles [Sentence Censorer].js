function censor(sentence) {
  
  let censor = sentence.split(' ');
  
  for(let i = 0; i < censor.length; i++)
    {
      (censor[i] === 'pancakes')?censor[i]='********':censor[i];
      (censor[i] === 'flapjacks' || censor[i] === 'Flapjacks')?censor[i]='*********':censor[i];
      (censor[i] === 'slapjacks')?censor[i]='*********':censor[i];
      (censor[i] === 'hotcakes')?censor[i]='********':censor[i];
      (censor[i] === 'waffles')?censor[i]='**waffles**':censor[i];
      (censor[i] === 'crepes')?censor[i]='**crepes**':censor[i];
      (censor[i] === 'blintzes')?censor[i]='**blintzes**':censor[i];
    }
  
        if(censor.includes('**waffles**'))
        {
          for(let j = 0; j < censor.length; j++)
            {
              (censor[j] === 'chocolate')?censor[j]='**chocolate**':censor[j];
              (censor[j] === 'syrup')?censor[j]='**syrup**':censor[j];
              (censor[j] === 'honey' || censor[j] === 'Honey')?censor[j]='**honey**':censor[j];
              (censor[j] === 'jam')?censor[j]='**jam**':censor[j];
              (censor[j] === 'butter')?censor[j]='**butter**':censor[j];
              (censor[j] === 'margarine')?censor[j]='**margarine**':censor[j];
            }
        }else
          {
              for(let j = 0; j < censor.length; j++)
              {
                (censor[j] === 'chocolate')?censor[j]='*********':censor[j];
                (censor[j] === 'syrup')?censor[j]='*****':censor[j];
                (censor[j] === 'honey' || censor[j] === 'Honey')?censor[j]='*****':censor[j];
                (censor[j] === 'jam')?censor[j]='***':censor[j];
                (censor[j] === 'butter')?censor[j]='******':censor[j];
                (censor[j] === 'margarine')?censor[j]='*********':censor[j];
              }
              
          }
  
  return(censor.join(' '));
  
}
