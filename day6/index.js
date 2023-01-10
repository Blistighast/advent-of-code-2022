const { readFileSync } = require("node:fs")

const example = readFileSync("example.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters
.trim() // remove starting and ending whitespace
// .split("\n") // split on new line

const input = readFileSync("input.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters
.trim() // remove starting and ending whitespace

//part 1
function day6Part1(input) {
  // go through input starting at length of given marker (marker length = 4)
  for (let i = 4; i <= input.length; i++) {
    // copy marker out of longer string
    let marker = input.slice(i - 4, i)
    // take unique characters out of marker
    let uniqueMarks = new Set(marker)
    // compare length of unique chars to all chars in marker, to see if all unique, return where it happens
    if (marker.length === uniqueMarks.size) {
      return i
    }
  }
}

console.log(day6Part1(example))
console.log(day6Part1(input))

//part2
function day6part2(input) {
  for (let i = 14; i <= input.length; i++) {
    const marker = input.slice(i - 14, i)
    const uniqueMarks = new Set(marker)
    if (marker.length === uniqueMarks.size) {
      return i
    }
  }
}

console.log(day6part2(example))
console.log(day6part2(input))