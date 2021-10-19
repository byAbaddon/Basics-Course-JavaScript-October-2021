function hotelRoom([month, nights]) {
  let priceStudio = 50
  let priceApartment = 65

  switch (month) {
    case 'May':
    case 'October':
      priceStudio = 50 * nights
      priceApartment = 65 * nights

      if (nights > 14) {
        priceStudio *= 0.70;
        priceApartment *= 0.90
      } else if (nights > 7) {
        priceStudio *= 0.95
      }
      break

    case 'June':
    case 'September':
      priceStudio = 75.20 * nights
      priceApartment = 68.70 * nights

      if (nights > 14) {
        priceStudio *= 0.80
        priceApartment *= 0.90
      }
      break

    case 'July':
    case 'August':
      priceStudio = 76.00 * nights
      priceApartment = 77.00 * nights
      if (nights > 14) {
        priceApartment *= 0.90
      }
      break
  }
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.\nStudio: ${priceStudio.toFixed(2)} lv.`)
}

//hotelRoom(['May', 15])
