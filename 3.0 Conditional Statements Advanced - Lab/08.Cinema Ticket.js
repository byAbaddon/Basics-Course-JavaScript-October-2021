function cinemaTicket(day) {
  const days = {'Monday': 12, 'Tuesday' : 12, 'Wednesday' : 14, 'Thursday' : 14, 'Friday' : 12, 'Saturday': 16 ,'Sunday': 16}
  return days[day]
}

// console.log(cinemaTicket(['Sunday']))
