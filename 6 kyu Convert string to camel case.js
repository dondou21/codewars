function toCamelCase(str){
  let arr = str.split(/[_-]/);
  var newArr = [];
for(let i = 0; i < arr.length ; i++)
   {
  
      if (i > 0) {
          let word = arr[i];
          word = word[0].toUpperCase() + word.slice(1);
          arr[i] = word;
      }
     newArr.push(arr[i]);
 
   }
  
  return newArr.join('');
}
