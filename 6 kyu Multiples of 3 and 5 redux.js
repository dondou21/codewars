function solution(number) {
  if (number < 1) return 0;

  const sumDivisibleBy = (k) => {
    const n = Math.floor((number - 1) / k);
    return k * (n * (n + 1)) / 2;
  };

  return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
}
