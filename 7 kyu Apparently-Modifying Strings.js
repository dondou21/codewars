function apparently(string) {
  // your code
  let arr = string.split(' ');
  
  var new_arr = arr.map((item, index) => (item === 'but' || item === 'and') && (arr[index +1] !== 'apparently')? item + ' apparently': item);
  
  return new_arr.join(' ');
}
