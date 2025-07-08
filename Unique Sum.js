function uniqueSum(lst){
  
  if(lst === null)
    {
      return 0;
    } else 
{  const arr = [... new Set(lst)];
  const sum = arr.reduce((acc, n) => acc + n,0);
  
  return sum === 0? null : sum;}
}
