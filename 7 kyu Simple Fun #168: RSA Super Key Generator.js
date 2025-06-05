function superKeyGenerator(n) {
  for (let fives = n; fives >= 0; fives--) {
    let threes = n - fives;
    if (fives % 3 === 0 && threes % 5 === 0) {
      return '5'.repeat(fives) + '3'.repeat(threes);
    }
  }
  return '-1';
}
