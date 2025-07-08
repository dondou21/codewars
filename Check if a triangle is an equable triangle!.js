function equableTriangle(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const perimeter = a + b + c;

  return area === perimeter;
}
