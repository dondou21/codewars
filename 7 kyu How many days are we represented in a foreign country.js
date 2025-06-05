function daysRepresented(trips) {
  const days = new Set();

  for (let [start, end] of trips) {
    for (let d = start; d <= end; d++) {
      days.add(d);
    }
  }

  return days.size;
}
