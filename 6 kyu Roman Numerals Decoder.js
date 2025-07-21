function solution (roman) {
  
  let arr = roman.split('');
  let result = 0;
  
  for(let i = 0; i < arr.length; i++)
    {
      
        {
            arr[i] === 'I'?result +=1:result
            if(arr[i] === 'V' && arr[i-1] === 'I')
              {result +=3
              }else{
                arr[i] === 'V'?result+=5:result
              }
            if(arr[i] === 'X' && arr[i-1] === 'I')
                {
                  result += 8
                }else 
            {arr[i] === 'X'?result +=10:result}
            if(arr[i] === 'L' && arr[i-1] === 'X')
              {
                result +=30
              }else {
                arr[i] === 'L'?result +=50:result
              }
            if(arr[i] === 'C' && arr[i-1] === 'X')
              {
                result +=80;
              }else 
            {arr[i] === 'C'?result +=100:result}
            if(arr[i] === 'D' && arr[i-1] === 'C')
              {
                result +=300
              }else
            {arr[i] === 'D'?result +=500:result}
            if(arr[i] === 'M' && arr[i-1] === 'C')
              {
                result += 800
              }else {
                arr[i] === 'M'?result +=1000:result
              }
        }
    }

	return result;
}
