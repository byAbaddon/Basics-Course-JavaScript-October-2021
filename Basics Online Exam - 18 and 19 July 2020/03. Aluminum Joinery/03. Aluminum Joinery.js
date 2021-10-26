function aluminumJoinery([order, model, deliveryType]) {
    function calcPrice(model) {
      const models = {
        '90X130': { price: 110, min: 30, max: 60, discount: 0.95, secondDiscount : 0.92},
        '100X150': { price: 140, min: 40, max: 80, discount: 0.94 , secondDiscount : 0.90},
        '130X180': { price: 190, min: 20, max: 50, discount: 0.93, secondDiscount : 0.88},
        '200X300': { price: 250, min: 25, max: 50, discount: 0.91, secondDiscount : 0.86},
      }
  
      let price = models[model].price
      if (models[model].min < order && order <= models[model].max) price *= models[model].discount
      else if (order > models[model].max) price *= models[model].secondDiscount
      return price * order
  
    }
  
    order = parseInt(order)
    if (order < 10) return 'Invalid order'
  
    let totalSum = calcPrice(model)
    let deliveryPrice = 60
  
    if (deliveryType == 'With delivery') totalSum += deliveryPrice
    if (order > 99) totalSum *= 0.96
  
    return `${totalSum.toFixed(2)} BGN`
  }
  
//   console.log(aluminumJoinery(["40", "90X130", "Without delivery"]))

//output: 4180.00 BGN



//-----------------------------------------------(2)--------------------------------------

// function aluminumJoinery([order, model, delivery_type]) {
//     order = parseInt(order)
//     let price = 0

//     if (order < 10) return 'Invalid order'

//     if (model == '90X130') {
//         price = 110
//         if (30 < order && order <= 60) price *= 0.95
//         else if (order > 60) price *= 0.92
//     } else if (model == '100X150') {
//         price = 140
//         if (40 < order && order <= 80) price *= 0.94
//         else if (order > 80) price *= 0.90

//     } else if (model == '130X180') {
//         price = 190
//         if (20 < order && order <= 50) price *= 0.93
//         else if (order > 50) price *= 0.88

//     } else if (model == '200X300') {
//         price = 250
//         if (25 < order && order <= 50) price *= 0.91
//         else if (order > 50) price *= 0.86

//     }

//     price *= order

//     if (delivery_type == 'With delivery') price += 60
//     if (order > 99) price *= 0.96

//     return `${price.toFixed(2)} BGN`
// }

// // console.log(aluminumJoinery(["40", "90X130", "Without delivery"]))