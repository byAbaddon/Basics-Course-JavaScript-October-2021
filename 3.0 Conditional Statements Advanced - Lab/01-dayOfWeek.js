function dayOfWeek(n) {
  const days = new Map([
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"],
    [7, "Sunday"],
  ]);

  return days.has(+n) ? days.get(+n) : "Error";
}

// console.log(dayOfWeek([2]))
