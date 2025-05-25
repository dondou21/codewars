function timeMath(time1, op, time2) {
  let t1 = time1.split(':');
  let t2 = time2.split(':');
  let t = [];
  
  for (let i = 0; i < 3; i++)
    {
      if(op === '+')
    {
      t[i] = parseInt(t1[i]) + parseInt(t2[i]);
    }else 
      {
      t[i] = parseInt(t1[i]) - parseInt(t2[i]);
      } 
    }
  
  // -----------------------------
  
  if (t[2] >= 60)
    {
      t[2] = t[2] - 60;
      t[1] +=1;
    }else if( t[2] <0)
  {
    t[1] -= 1;
    t[2] += 60;
  }
  
  if(t[1] >= 60)
    {
    t[1] = t[1] - 60;
    t[0] +=1;
    }else if( t[1] <0)
  {
    t[0] -= 1;
    t[1] += 60;
  }
  
  t[0] > 23? (t[0] = t[0]-24) : t[0];
  t[0] < 0? (t[0] = 24 + t[0]) : t[0];
  
  
  let time = t.map(ti => String(ti).padStart(2, "0")).join(':');
  
  console.log(time);
  
  return time;
}
