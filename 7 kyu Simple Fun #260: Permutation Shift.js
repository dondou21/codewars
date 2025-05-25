function permutationShift(permutation) {
 //coding and coding..
  let shift = [];
  for(let i = 0; i < permutation.length; i++)
    {
      let index = permutation.indexOf(i);
      shift.push( i-index);
    }
  
 
 return (Math.max(...shift) - Math.min(...shift));
}
