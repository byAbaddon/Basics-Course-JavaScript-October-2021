function readText(arg) {
  for (const el of arg) {
    if (el == 'Stop')  break
    console.log(el)
  }
}

// readText([
//   "Nakov",
//   "SoftUni",
//   "Sofia",
//   "Bulgaria",
//   "SomeText",
//   "Stop",
//   "AfterStop",
//   "Europe",
//   "HelloWorld"
// ])