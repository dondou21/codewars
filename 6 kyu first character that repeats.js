function firstDup (s) {
  // your solution here
  let arr = s.split('');
  let char;
   for( let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
          if(arr[i] == arr[j]){
            char = arr[i];
            return char;
          } 
        }
   }
}
