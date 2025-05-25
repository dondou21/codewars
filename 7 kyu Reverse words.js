function reverseWords(str) {
  // Go for it
let arr = str.split(' ');
 let arr1 = arr.map((item) => item.split('').reverse().join(''));
  
  return arr1.join(' ');
}
