function newHouse([flowers, count, budget]) {
  let result = 0
  const flowersPrice = new Map([
    ['Roses', 5],
    ['Dahlias', 3.80],
    ['Tulips', 2.80],
    ['Narcissus', 3],
    ['Gladiolus', 2.50],
  ])

  switch (true) {
    case flowers === 'Roses' && count > 80:
       result = count * flowersPrice.get(flowers) * 0.90  
      break;
   case flowers === 'Dahlias' && count > 90:
       result = count * flowersPrice.get(flowers) * 0.85  
     break;
    case flowers === 'Tulips' && count > 80:
      result = count * flowersPrice.get(flowers) * 0.85  
    break;
    case flowers === 'Narcissus' && count < 120:
      result = count * flowersPrice.get(flowers) * 1.15  
    break;
    case flowers === 'Gladiolus' && count < 80:
      result = count * flowersPrice.get(flowers) * 1.20 
    break;

    default:
      result = count * flowersPrice.get(flowers)
      break;
  }
      total = (budget - result).toFixed(2) 
      if (total > -1) {
        console.log(`Hey, you have a great garden with ${count} ${flowers} and ${total} leva left.`)
      } else{
        console.log(`Not enough money, you need ${Math.abs(total).toFixed(2)} leva more.`)
      }
}
  
// newHouse(['Roses', 55, 250])
// newHouse(['Tulips', 88, 260])
