function isSumOfCubes(s){

    let cube = [];
    let numbers = s.match(/\d{1,3}/g);
  numbers.forEach(num => {
    let isCubeValue = num.split("").reduce((a, i) => a + Number(i) ** 3, 0)
    if (+num === isCubeValue) {
      cube.push(+num)
    }
  })
  if (cube.length > 0) {    
    return `${cube.join(" ")} ${cube.reduce((a, i) => a + Number(i), 0)} Lucky` 
  } else {
    return "Unlucky"
  }
}
