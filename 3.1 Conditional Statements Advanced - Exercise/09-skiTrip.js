function skiTrip([days, room_type, opinion]) {
  let price = 0
  days -= 1

  if (room_type == 'room for one person') price = 18 
  else if (room_type == 'apartment') {
      price = 25
      days > 15 ? price *= 0.50 : days >= 10 ? price *= 0.65 : price *= 0.70
  } else {
      price = 35
      days > 15 ? price *= 0.80 : days >= 10 ? price *= 0.85 : price *= 0.90;
  }

  opinion == 'positive' ? price *= 1.25 : opinion == 'negative' ? price *= 0.90 : null
  return (price * days).toFixed(2)
}

// console.log(skiTrip([14, "apartment", "positive"]))