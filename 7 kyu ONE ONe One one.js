function consecutiveOnes(nums) {
  
  let count = 0;
  let max = 0 ;
  nums.forEach((num) => {
    if(num === 1){
      count ++
      max = Math.max(max, count)
    }else {
      count = 0;
    }
  })
  return max;
};
