function selectSubarray(arr) {
 
let array = arr;
let index;
let q;
let result = Infinity;
  for(let i = 0; i <= arr.length ; i ++){
    arr = [...array];
    arr.splice(i , 1);
    let SubSum = arr.reduce((acc,n) => acc += n);
    let SubProduct = arr.reduce((acc, n) => acc *= n);
    
    if( SubSum === 0 ){
     continue
      } else {
        q = Math.abs(SubProduct / SubSum) 
      }
    
      if( result > q ){
        result = q;
        index = i;
      }
  }
  return [index, array[index]];
 
}
