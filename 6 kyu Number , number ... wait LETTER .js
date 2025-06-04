function doMath(s) {
  const ops = ['+', '-', '*', '/'];
  
  let items = s.split(' ').map((token, idx) => {
    const letter = token.match(/[a-zA-Z]/)[0];
    const number = parseInt(token.replace(/[a-zA-Z]/g, ''));
    return { letter, number, index: idx };
  });
  items.sort((a, b) => {
    if (a.letter === b.letter) return a.index - b.index;
    return a.letter.localeCompare(b.letter);
  });
  let result = items[0].number;
  for (let i = 1; i < items.length; i++) {
    const op = ops[(i - 1) % ops.length];
    const num = items[i].number;

    switch (op) {
      case '+': result += num; break;
      case '-': result -= num; break;
      case '*': result *= num; break;
      case '/': result /= num; break;
    }
  }
  return Math.round(result);
}
