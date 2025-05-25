function enough(cap, on, wait) {
  // your code here
  let x = cap - on - wait;
  
  if(x <= 0)
    {
      return -x;
    }else
      {
        return 0;
      }
}
