function personalTitles([age, gender]) {
  if (gender == 'f') return +age < 16 ? 'Miss' : 'Ms.'
  return +age < 16 ? 'Master' : 'Mr.'
}

// console.log(personalTitles([25, 'f']))
// console.log(personalTitles([19, 'm']))