function digitalRoot(n) {
 // ...
  let sum;
  
  do {
    sum = 0;
     while (n >= 10)
      {
        sum += n % 10;
        n = Math.floor(n/10);
      }
     sum += n;
      n = sum;
  }while(n >= 10);
  
  return n;
   
}
