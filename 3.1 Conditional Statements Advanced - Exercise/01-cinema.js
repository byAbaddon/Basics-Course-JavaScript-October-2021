function cinema([type, row, col]) {
  let projectionType = { Premiere: 12.0, Normal: 7.5, Discount: 5.0 }
  return (projectionType[type] * row * col).toFixed(2) + " leva"
}

// console.log(cinema(["Premiere", 10, 12]))
