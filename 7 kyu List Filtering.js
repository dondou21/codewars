function filter_list(l) {
  let array = [];
  for(let i = 0; i < l.length; i++)
    {
      if(typeof l[i] === 'number')
        {
          array.push(l[i]);
        }
    }
  return array;
  // Return a new array with the strings filtered out
}
