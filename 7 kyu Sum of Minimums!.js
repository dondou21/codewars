function sumOfMinimums(arr) {
 let new_arr;
  var sum= 0;
  for(let i = 0; i < arr.length; i++)
    {
      sum +=Math.min(...arr[i]);
    }
  return sum;
  // your code here
}
