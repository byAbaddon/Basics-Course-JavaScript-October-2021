function cake(arg) {
  let birthdayCake = arg.shift() * arg.shift()
  let pieces = arg.filter(el => Number(el)).reduce((a, b) => +a + +b)
  let total = Math.abs(birthdayCake - pieces)
  return birthdayCake > pieces ? `${total} pieces are left.` : `No more cake left! You need ${total} pieces more.`
}

//console.log(cake(['10', '10', '20', '20', '20', '20', '21']))
//console.log(cake(['10', '2', '2', '4', '6', 'STOP']))