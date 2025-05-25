var splitInParts = function(s, partLength){
  // Good Luck!
  let arr = [];
  let str = [];
  
  for(let i = 0; i < s.length; i+=partLength)
    {
      arr = s.slice(i,i+partLength);
      str.push(arr);
    }
  return str.join(" ");
}
