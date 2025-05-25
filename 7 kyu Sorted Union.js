function uniteUnique(...arr) {
  let newArr = [];
  for(let i of arr )
    {
      for(let j of i)
        {
          if(!newArr.includes(j))
            {
              newArr.push(j);
            }
        }
    }
  
  return (newArr);
}
