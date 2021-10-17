function metricConverter(...arg) {
    let n = +arg[0]
   
    switch (arg[1]) {
      case 'mm': n /= 1000; break;
      case 'cm': n /= 100; break;
      case 'm': n /= 1; break;
    }
  
    switch (arg[2]) {
      case 'mm': n *= 1000; break;
      case 'cm': n *= 100; break;
      case 'm': n *= 1; break;
    }
  
    return n.toFixed(3)
   }

//    console.log(metricConverter('12', 'mm', 'm'));


//----------------------------------------------------------------------_(2)----------------------
function metricConverter(n, arg2, arg3) {
  if (arg2 === 'mm') {
      n /= 1000
  } else if (arg2 === 'cm') {
      n /= 100
  } else {
      n /= 1
  }

  if (arg3 === 'mm') {
      n *= 1000
  } else if (arg3 === 'cm') {
      n *= 100
  } else {
      n *= 1
  }

  console.log(n.toFixed(3))
}

// metricConverter('12', 'mm', 'm')