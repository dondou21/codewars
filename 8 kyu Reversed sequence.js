const reverseSeq = n => {
  let array = [];
  for( let i = 0; i < n; i++)
      {
    array.push(n-i);
  }

  return array;
};
