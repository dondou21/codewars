function greatestProduct(input) { 
  let array = input.split('');
  let result = [];
  var product;
  for(let i = 0 ; i < array.length ; i++)
    {
      product = 1;
      for(let j = i; j < i+5; j++)
        {
          product *= array[j];
        }     
      if(!isNaN(product)) result.push(product);
    }
  result.sort((a, b) => b-a);
 return result[0];
}
