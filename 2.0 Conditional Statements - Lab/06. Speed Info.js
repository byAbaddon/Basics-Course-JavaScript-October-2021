function speedInfo(speed) {
  return speed <= 10  ? 'slow' : speed <= 50 ? 'average' : speed <= 150 ? 'fast' : speed <= 1000 ? 'ultra fast' : 'extremely fast'
}

// console.log(speedInfo(16));