function fruitOrVegetable([arg]) {
  const arr = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "tomato", "cucumber", "pepper", "carrot"]
  if (arr.includes(arg)) return arr.findIndex(x => x === arg) <= 5 ? "fruit" : "vegetable"
  return "unknown"
}


// console.log(fruitOrVegetable(['banana']))
