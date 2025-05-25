function filterString(value) {
  
  let arr = value.split('');
  
  arr = arr.filter(item => !isNaN(item)).join('');
  
  
  return parseInt(arr);

}
