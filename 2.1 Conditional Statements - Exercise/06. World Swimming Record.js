function swimmingRecord([record, trace, metersMin]) {
    let swimmingTrace = trace * metersMin
    let addSeconds = ~~(trace / 15) * 12.5
    let time = swimmingTrace + addSeconds
  
    if (time >= record) {
      time = Math.abs(record - time)
      return `No, he failed! He was ${time.toFixed(2)} seconds slower.`
    } 

    return `Yes, he succeeded! The new world record is ${(time).toFixed(2)} seconds.`  
  }

// console.log(swimmingRecord(['10464', '1500', '20']))


