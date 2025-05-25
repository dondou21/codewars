function duplicateCount(text) {
  let array = text.toLowerCase();
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    // Skip if character is already processed by previous loop
    if (array[i] === "*") continue;

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
        
        // Mark all further occurrences of this character as "*"
        for (let k = j; k < array.length; k++) {
          if (array[k] === array[i]) {
            array = array.substring(0, k) + "*" + array.substring(k + 1);
          }
        }
        
        break; // Exit inner loop after counting the character
      }
    }
  }

  return count;
}
