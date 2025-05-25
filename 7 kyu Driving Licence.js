function driver(data) {
  // Code here
  /*
  *
//   1-Create an array licence to store the output
//   2-Add the last name to licence variable and add also the five's 9
//   3-Keep justthe first five character
//   4-Add the decade digit of the year of birthday
  5-Add the character of month 
  6-Increment by 5 if it is a female
  7-Add the the of birth 
  8-Add the first character of the first name
  9-Add the First character of the middle name if not exist add 9
  10-Add additionary 9 and also 'AA'
  *
  */
  
  let licence = [];
  
  licence = licence + data [2]+ '99999';
  licence = licence.slice(0,5);
  
  // Add the year
  
  licence +=data[3][data[3].length -2];
  
  // Add month and append with  5 if is female
  
  let month = data[3].slice(3,6);
  
  let m;
  
  switch(month)
    {
      case 'Jan':
        data[4] === 'M'?m = '01': m = '51';
        break;
        
      case 'Feb':
        data[4] === 'M'?m = '02': m = '52';
        break;
        
      case 'Mar':
        data[4] === 'M'?m = '03': m = '53';
        break;
        
      case 'Apr':
        data[4] === 'M'?m = '04': m = '54';
        break;
        
      case 'May':
        data[4] === 'M'?m = '05': m = '55';
        break;
        
      case 'Jun':
        data[4] === 'M'?m = '06': m = '56';
        break;
        
      case 'Jul':
        data[4] === 'M'?m = '07': m = '57';
        break;
        
      case 'Aug':
        data[4] === 'M'?m = '08': m = '58';
        break;
        
      case 'Sep':
        data[4] === 'M'?m = '09': m = '59';
        break;
        
      case 'Oct':
       data[4] === 'M'?m = '10': m = '60';
        break;
        
      case 'Nov':
        data[4] === 'M'?m = '11': m = '61';
        break;
        
      case 'Dec':
       data[4] === 'M'?m = '12': m = '62';
        break;
    }
  
  licence += m; 
  
  //Add the date 
  
  licence += data[3][0] + data[3][1]; 
  
  // Add year (2)
  
  licence += data[3][data[3].length - 1]; 
  
  // Add the first name
  
  licence += data[0][0];
  
  // Add the middle name
  
  data[1] === ''?licence +='9':licence +=data[1][0];
  
  // Add 9 and 'AA'
  
  licence += '9AA';
  
  return licence.toUpperCase();
  
}
