function lottery(str){
   let arr = str.split('');
  arr = new Set (arr.filter(x => !isNaN(x)));
   str = [...arr].join('');
  
  return str == ''? 'One more run!':str;

}
