function sumPrimeNonPrime(arg) {
  let [primeNumSum, nonPrimeNumSum] = [0, 0]
  const arrPrimeNum = ['2','3','5','7','11','13','17','19','23','29','31','37','41','43','47','53','59','61','67','71','73','79','83','89','97','101','103','107','109','113','127','131','137','139','149','151','157','163','167','173','179','181','191','193','197','199','211','223','227','229','233']

  for (let i = 0; i < arg.length; i++) {
    if (arg[i] < 0) {
      console.log(`Number is negative.`);
      continue
    } else if (arg[i] === "stop") {
      break
    } else {
       if(arrPrimeNum.includes(arg[i])){
        primeNumSum += +arg[i]
      } else{
        nonPrimeNumSum += +arg[i]
      }
    }
  }
  console.log(`Sum of all prime numbers is: ${primeNumSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);
}

//sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
//sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
