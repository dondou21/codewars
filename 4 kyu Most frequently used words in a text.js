function topThreeWords(text) {
  
  text = text.toLowerCase().trim().replace(/["",.//\/:]/g,'');
  
  let array = text.split(' ')
  
  console.log(array);
  
  
  let object = {};
  let count;
  for(let i = 0; i < array.length; i++)
    {
      if(object[array[i]] === undefined )
        {
          count = 1;
          for(let j = i+1; j < array.length; j++)
            {
              if(array[i] === array[j])
                {
                  count +=1;
                }
            }
          object[array[i]] = count; 
        }
      
      console.log(count);
    }

  
  delete object[''];
  delete object['\''];
  
  let sort = Object.keys(object).sort((a,b) => (object[b] - object[a]));
  
    return sort.slice(0,3);
}
