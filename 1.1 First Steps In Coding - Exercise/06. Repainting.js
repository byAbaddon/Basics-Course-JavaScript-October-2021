function repainting(arg) {
  let [nylon, paint, diluent, hours] = arg.map(Number)
  nylon = (nylon + 2) * 1.5
  paint = (paint * 1.1) * 14.5
  diluent *= 5.0

  let totalMaterials = nylon + paint + diluent + 0.4
  let masersPrice = totalMaterials * 0.30 * hours

  return (totalMaterials + masersPrice).toFixed(2)
}

// console.log(repainting([10, 11, 4, 8]))