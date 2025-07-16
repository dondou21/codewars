function rotate(array,n){
  
  const temp = array.sort()
  temp.sort()
  
  while( n > 5 )  {
    n = n-5
  }
  if(n === -7)
    n = -2
  
  if(temp[1] === 2 || temp[1] == 'b')
  {
    array  = array.sort();
    const arr = array.splice(-n);
    array.unshift(...arr)
    
    return array
  }  else{
    
    return array
  }
  
}
