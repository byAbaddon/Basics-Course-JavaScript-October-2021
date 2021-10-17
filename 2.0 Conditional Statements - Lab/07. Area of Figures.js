areaOfFigures = ([fig, a, b]) => {
  const figures = {'square': a ** 2, 'rectangle': a * b, 'circle': a ** 2 * 3.1416, 'triangle': a * b / 2}
  return figures[fig].toFixed(3)
}

// console.log(areaOfFigures(['square', 5]))
// console.log(areaOfFigures(['rectangle', 7, 2.5]))
// console.log(areaOfFigures(['circle', 6]))

//------------------------------------------------------------------(2)------------------------

// function areaOfFigures([fig, a, b]) {
//   if (fig == 'square')    return (a ** 2).toFixed(3)
//   if (fig == 'rectangle') return (a * b).toFixed(3)
//   if (fig == 'circle')    return (a * a * Math.PI).toFixed(3)
//   if (fig == 'triangle')  return (a * b / 2).toFixed(3)
// }

// console.log(areaOfFigures(['square', 5]))
// console.log(areaOfFigures(['rectangle', 7, 2.5]))
// console.log(areaOfFigures(['circle', 6]))
//------------------------------------------------------------------(3)-------------------------

// function areaOfFigures([figure, a, b]) {
//   let result = 0

//     switch (figure) {
//         case 'square': result = Math.pow(a, 2); break 
//         case 'rectangle': result = a * b ; break
//         case 'circle': result = a * a * Math.PI; break
//         case 'triangle': result = a * b / 2; break
//         }

//     return  result.toFixed(3)
//   }

// console.log(areaOfFigures(['square', 5])) 
// console.log(areaOfFigures(['rectangle', 7, 2.5])) 



