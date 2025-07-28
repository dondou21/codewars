function squareProduct(n) {
  
  let arr = [];
  for(let i = 1; i <= Math.sqrt(n); i++){
    for(let j = i; j <=Math.sqrt(n); j++){
      if((j*i) === Math.sqrt(n)) arr.push([i,j])
      
      if ((i * i * j * j) > n) break;
    }
  }
  
    return arr;
}
