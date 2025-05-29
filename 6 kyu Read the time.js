function solve(time) {
    
  let timer = time.split(':');
   timer[0] = parseInt(timer[0]);
   timer[1] = parseInt(timer[1]);
  console.log(timer[0])
  console.log(timer[1])
  
  let minute, hour, link;
  
  const numLetter = [
    "zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
  ]
  
  if(timer[1] > 30){
    link = ' to ';
    timer[0] += 1;
    timer[1] = 60 - timer[1];
  } else{
    link = ' past '
  }
  
  
  
  if( timer[1] == 0) {
    minute = " o'clock"
    link = '';
    hour = 'midnight';
  } else if( timer[1] == 15){
     minute = 'quarter';
   }else if( timer[1] == 30){
     minute = 'half';
   }else if( timer[1] > 20) {
    minute = numLetter[20] + ' ' + numLetter[timer[1] - 20]
  } else {
    minute = numLetter[timer[1]]
  }
  
  
  if(timer[0] === 0 && timer[1] == 0 ){
    minute = '';
  } 
  
  if(timer[0] === 0 || timer[0] === 24) {
    hour = 'midnight'
  } else if( timer[0] > 12 && timer[0] !=24) {
    timer[0] -= 12;
    hour = numLetter[timer[0]]
  } else {
    hour = numLetter[timer[0]]
  }
  
  let Min = '';
  timer[1] === 1?Min = ' minute':Min = ' minutes';
  
  if(hour === 'midnight' && minute === 0) {
    minute = '';
    }
  
  
    if(timer[1]== 0) {
      
   return (hour + '' + link + '' + minute)
   } else if(timer[1] == 15 || timer[1] == 30){
     return (minute + link + hour)
   }
  else if( timer[1] < 30) {
    return (minute + Min + link + hour);
    } else {
      return ( hour + Min + link + hour);
    }
}
