function productArray(numbers){
  //your code here
  let prod = [];
  let arr = numbers;
  for(let i = 0; i <= numbers.length; i++) {
     numbers = [...arr];
    numbers.splice(i, 1)
   let result = numbers.reduce((n, acc) => acc *=n )
   prod.push(result)
  }
  
  return prod;
}
