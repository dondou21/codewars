function towerBuilder(nFloors, nBlockSz) {
   // retrieve the width (w) and the height (f)
  let w = nBlockSz[0];
  let h = nBlockSz[1];
   
  // the line 
  for(let i = 1; i <= h; i++) 
    { 
      let line = []; 
      for(let j = 1; j <= w; j++)
        {
          line.push("*");
        }
      return `["${line.join("")}"]`;
    }
}
