function openOrSenior(data){
  // ...
  
  let member= [];
  
  for( let i =0; i < data.length; i++)
    {
      (data[i][0]  > 54 && data[i][1] > 7)? member.push("Senior"): member.push("Open");
    }

  
  return (member);
}
