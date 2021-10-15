function fishTank([long, width,  hight, percent]) {
   let size = long * width * hight * 0.001
   let pr = percent * 0.01
   return size * (1 - pr)     
}

// console.log(fishTank(['85', '75', '47', '17']))