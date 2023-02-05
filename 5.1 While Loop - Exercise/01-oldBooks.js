function oldBooks(arg) { 
  const book = arg.shift()
  let countBooks = 0

  while (arg) {
    currentBook = arg.shift()
    if (currentBook == 'No More Books') break
    if (book == currentBook) return `You checked ${countBooks} books and found it.`
    countBooks++
  }

  return `The book you search is not here!\nYou checked ${countBooks} books.`
}

//console.log(oldBooks(['Troy','Stronger','Life Style','Troy']))
