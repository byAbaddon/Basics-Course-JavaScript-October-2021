function summerOutfit([degrees, partOfDay], result) {
  const obj = { 
                m: {Morning:'Sweatshirt and Sneakers', Afternoon: 'Shirt and Moccasins', Evening: 'Shirt and Moccasins'},      
                a: {Morning:'Shirt and Moccasins',     Afternoon: 'T-Shirt and Sandals', Evening: 'Shirt and Moccasins'},          
                e: {Morning:'T-Shirt and Sandals',     Afternoon: 'Swim Suit and Barefoot', Evening: 'Shirt and Moccasins'},   
             }

if (degrees >= 10 && degrees <= 18) result = obj.m[partOfDay]
if (degrees > 18 && degrees <= 24)  result = obj.a[partOfDay]  
if (degrees >= 25) result = obj.e[partOfDay]
return  `It's ${degrees} degrees, get your ${result}.`

}

// console.log(summerOutfit([16, 'Morning']))

//----------------------------------------------------------(2)--------------------


// function summerOutfit([degrees, partOfDay], result) {

//   if (partOfDay == "Morning") {
//     if (degrees <= 18) {
//       result = 'Sweatshirt and Sneakers'
//     } else if (degrees <= 24) {
//       result = 'Shirt and Moccasins'
//     } else {
//       result = 'T-Shirt and Sandals'
//     }
//   } else if (partOfDay == "Afternoon") {
//     if (degrees <= 18) {
//       result = 'Shirt and Moccasins'
//     } else if (degrees <= 24) {
//       result = 'T-Shirt and Sandals'
//     } else {
//       result = 'Swim Suit and Barefoot'
//     }
//   } else {
//     result = 'Shirt and Moccasins'
//   }

//   console.log(`It's ${degrees} degrees, get your ${result}.`);
// }

//summerOutfit([16, 'Morning'])