function toCamelCase(s, n) {
  let arr = s.split(' ');

  if (n === 1) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arr[i] = arr[i].toLowerCase();
      } else {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      }
    }
  } else if (n === 2) {
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i].toLowerCase();
      if (i !== arr.length - 1 && word.length > 0) {
        word = word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase();
      }
      arr[i] = word;
    }
  } else if (n === 3) {
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i].toLowerCase();

      if (i === 0) {
        if (word.length > 1) {
          word = word.slice(0, -1) + word[word.length - 1].toUpperCase();
        }
      } else if (i === arr.length - 1) {
        if (word.length > 1) {
          word = word[0].toUpperCase() + word.slice(1);
        }
      } else {
        if (word.length > 1) {
          word = word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
        } else {
          word = word.toUpperCase();
        }
      }

      arr[i] = word;
    }
  }

  return arr.join('');
}
