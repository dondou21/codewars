function sumIntervals(intervals) {
  if (!intervals.length) return 0;

  // Sort intervals by start value
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = merged[merged.length - 1];
    let curr = intervals[i];

    if (curr[0] < prev[1]) {
      // Overlap: merge them
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      // No overlap: push the current interval
      merged.push(curr);
    }
  }

  // Sum the lengths of merged intervals
  return merged.reduce((sum, [start, end]) => sum + (end - start), 0);
}
