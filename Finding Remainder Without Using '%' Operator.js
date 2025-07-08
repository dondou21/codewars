const remainder = (D, d) => {
  const div = D / d;
  const rest = div - Math.floor(div);
  
  return Math.round(rest * d);
};
