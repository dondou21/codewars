function stray(numbers) {
  // The stray number is either the first, second, or last element
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    return numbers[0];
  }
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[0]) {
      return numbers[i];
    }
  }
}
