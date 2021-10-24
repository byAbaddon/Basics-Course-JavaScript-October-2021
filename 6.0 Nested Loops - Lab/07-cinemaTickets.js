function cinemaTickets(arg) {
  let [student, standard, kid] = [0, 0, 0]
  let movie = arg.shift()

  while (movie != 'Finish') {
    seats = arg.shift()
    tickets = 0

    for (let i = 0; i < seats; i++) {
      chairs = arg.shift()
      if (chairs == 'End') break;

      chairs === 'student' ? student++ : null
      chairs === 'standard' ? standard++ : null
      chairs == 'kid' ? kid++ : null
      tickets++
    }
    console.log(`${movie} - ${(tickets / seats * 100).toFixed(2)}% full.`)
    movie = arg.shift()
  }

  totalTickets = student + standard + kid
  console.log('Total tickets:', totalTickets)
  console.log((student / totalTickets * 100).toFixed(2) + '%', 'student tickets.')
  console.log((standard / totalTickets * 100).toFixed(2) + '%', 'standard tickets.')
  console.log((kid / totalTickets * 100).toFixed(2) + '%', 'kids tickets.')
}

// cinemaTickets([
//   'The Matrix',
//   '20',
//   'student',
//   'standard',
//   'kid',
//   'kid',
//   'student',
//   'student',
//   'standard',
//   'student',
//   'End',
//   'The Green Mile',
//   '17',
//   'student',
//   'standard',
//   'standard',
//   'student',
//   'standard',
//   'student',
//   'End',
//   'Amadeus',
//   '3',
//   'standard',
//   'standard',
//   'standard',
//   'Finish',
// ])
