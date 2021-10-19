function fishingBoat([budget, season, fishermen]) {  
  const seasonPrice = {Spring: 3000, Summer: 4200, Autumn: 4200, Winter: 2600}; 
  let result = seasonPrice[season];

  switch (true) {
    case fishermen <= 6:
      result-= result * 0.1;
      break;
    case fishermen >= 7 && fishermen <= 11:
      result-= result * 0.15;
      break;
    case fishermen > 12:
      result -= result * 0.25;
      break;
  }

  if (season !== "Autumn" && !(fishermen & 1)) {
    result -= result * 0.05;
  }

  let total = Math.abs(budget - result);

  if (result > budget) {
     console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);  
  } else {
     console.log(`Yes! You have ${total.toFixed(2)} leva left.`);
    }
}

// fishingBoat([3000, "Summer", 11])

