function rgb(r, g, b) {
  
  r = Math.max(0,Math.min(255,r));
  g = Math.max(0,Math.min(255,g));
  b = Math.max(0,Math.min(255,b));  
  
  let hexr,hexg,hexb;
  hexr = r.toString(16).toUpperCase().padStart(2,"0");
  hexg = g.toString(16).toUpperCase().padStart(2,"0");
  hexb = b.toString(16).toUpperCase().padStart(2,"0");
  
  return hexr + hexg + hexb ;
}
