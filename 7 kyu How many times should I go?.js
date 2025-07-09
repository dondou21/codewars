function howManyTimes(annualPrice, individualPrice) {
  let result = annualPrice/individualPrice;
  return(Math.floor(result) !==  result)? Math.floor(result) + 1: result
}
