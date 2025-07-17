Array.range = function(start, count) {
  const arr = []
  for(let i = 0; i < count; i++ ){
    arr.push(start)
    start++
  }
  return arr
}

Array.prototype.sum = function(arr) {
 
  
  return this.reduce((acc, n) => acc + n , 0);
}
