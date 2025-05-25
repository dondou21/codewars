function solve(a,b){
  let count = 0;
  let arr = [];
  for(let i = 0; i < b.length; i++)
    {
      for(let j = 0; j < a.length; j++)
        {
          if( b[i] === a[j] )
            {
              count +=1;
            }
        }
      arr.push(count);
      
      count = 0;
    }
  
  return arr;
}
