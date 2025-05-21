/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
function contentWeight(bottleWeight, scale) {
  /*
  0- Extrat the number from the scale
  1- add one on the scale
  2- divide the bottle weight by the new scale
  3- multiplite the resulte by the first scale if it is larger
  
  */
  let num  = scale.split(" ");
  let new_scale = Number(num[0]);
  console.log(num);
  if(num[2] == "larger"){
    return bottleWeight/(new_scale+1) * new_scale;
  } else {
    return bottleWeight/(new_scale+1);
  }
}
