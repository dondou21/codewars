function displayValue(value) {
  let minute = value;
  let hour = Math.floor(minute / 60);
  minute = minute % 60;

  let day = Math.floor(hour / 24);
  hour = hour % 24;

  let week = Math.floor(day / 7);
  day = day % 7;

  let month = Math.floor(week / 4);
  week = week % 4;

  function format(unit, label) {
    return unit > 0 ? `${unit} ${label}${unit > 1 ? 's' : ''}` : null;
  }
  const parts = [
    format(month, 'month'),
    format(week, 'week'),
    format(day, 'day'),
    format(hour, 'hour'),
    format(minute, 'minute')
  ].filter(Boolean); 

  return parts.join(' ');
}
