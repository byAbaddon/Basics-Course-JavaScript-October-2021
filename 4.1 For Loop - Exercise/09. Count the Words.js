function countTheWords(text) {
    const result = text.split(' ').length 
    return result > 10 ? `The message is too long to be send! Has ${result} words.` : 'The message was send successfully!' 
}

// console.log(countTheWords("This message has exactly eleven words. One more as it's allowed!"))
