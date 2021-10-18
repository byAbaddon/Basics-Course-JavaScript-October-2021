function animalType([animal]) {
  const reptile = ["snake", "tortoise", "crocodile"]
  return reptile.includes(animal) ? 'reptile' : animal == 'dog' ? 'mammal' : 'unknown'
}

// console.log(animalType(["dog"]))
// console.log(animalType(["tortoise"]))
// console.log(animalType(["snakeByte"]))