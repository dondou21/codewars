xport function equalize(array:number[]):string[] {
  let result: string[] = [];
  
  for(let i = 0; i < array.length; i++){
    let cal = array[i] - array[0];
    if(cal >= 0){
      result.push('+' + cal);
    }else {
      result.push('-' + Math.abs(cal));
    }
  }
  return result;
}
