function sumMul(n,m){

  let sum = 0;
  if( n >= m) 
    {
      return 'INVALID';
    }else 
      {
        for(let i = 1; i < m/n; i++) 
          {
            sum += i*n;
          }
      }
  
  return sum;
}
