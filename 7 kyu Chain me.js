function chain(input, fs) {
// implement the "chain" function
  return fs.reduce((acc, funct) => funct(acc), input);
}
