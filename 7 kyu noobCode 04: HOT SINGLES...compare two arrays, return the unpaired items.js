function hotSingles(arr1, arr2) {
//WRITE YOUR CODE HERE!! GOOD LUCK
  
  let unique_arr1 = arr1.filter(item => !arr2.includes(item));
  let unique_arr2 = arr2.filter(item => !arr1.includes(item));
  
  let new_arr = [...new Set(unique_arr1.concat(unique_arr2))];
  
    return new_arr;
}
