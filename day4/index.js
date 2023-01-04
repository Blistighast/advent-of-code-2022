const { readFileSync} = require('node:fs')

const example = readFileSync("example.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters
.trim() // remove starting and ending whitespace
.split("\n") // split on new line

const input = readFileSync("input.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters
.trim() // remove starting and ending whitespace
.split("\n") // split on new line

//part 1
function day4(input) {
  let counter = 0

  // go through each pair
  for (let pair of input) {
    // split all numbers out into array and make them int ex: 2-4,6-8 => [ 2, 4, 6, 8 ]
    let splitPair = pair.split(/\D/g).map(num => parseInt(num))

    if (
      // check if first set completely encompasses second set & increase counter
      splitPair[0] <= splitPair[2] 
      && splitPair[1] >= splitPair[3]
    ) {counter++} 
    else if (
      // check if second set completely encompasses first set & increase counter
      splitPair[0] >= splitPair[2]
      && splitPair[1] <= splitPair[3]
    ) {counter++}
    
  }
  // how many completely overlapped pairs
  return counter
}

console.log(day4(example))
console.log(day4(input))

// part 2
function day4part2(input) {
  let counter = 0

  // go through each pair
  for (let pair of input) {
    // split the pairs out into array for readability
    let splitPair = pair.split(/\D/g).map(num => parseInt(num))

    if (
      // if check doesnt equal both fail cases, increase counter
      !((splitPair[0] < splitPair[2] && splitPair[1] < splitPair[2]) // range 1 is completely less than range 2
      || (splitPair[0] > splitPair[3] && splitPair[1] > splitPair[3])) //range 1 is completely greater than range 2
    ) { counter++}
  }

  // how many pairs that have any overlap
  return counter
}

console.log(day4part2(example))
console.log(day4part2(input))