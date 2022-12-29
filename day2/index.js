const { readFileSync } = require("node:fs")
const { title } = require("node:process")

const example = readFileSync("example.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters
.trim() // remove starting and ending whitespace
.split("\n") // split on new line

// console.log(example)

const input = readFileSync("input.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters
.trim() // remove starting and ending whitespace
.split("\n") // split on new line

//part 1

// A = Rock, B = Paper, C = Scissor
// X = Rock, Y = Paper,  Z = Scissor
// X = 1, Y = 2,  Z = 3
// Loss = 0, Tie = 3, Win = 6

function day2(input) {
  const loss = ["A Z", "B X", "C Y"]
  const tie = ["A X", "B Y", "C Z"]
  const win = ["A Y", "B Z", "C X"]
  
  totalScore = 0

  for (let i = 0; i < input.length; i++) {
    subScore = 0
    if (input[i].includes("X")) {
      // rock score
      subScore += 1
    } else if (input[i].includes("Y")) {
      // paper score
      subScore += 2
    } else if (input[i].includes("Z")) {
      // scissor score
      subScore += 3
    }

    if (loss.includes(input[i])) {
      subScore += 0
    } else if (tie.includes(input[i])) {
      subScore += 3
    } else if (win.includes(input[i])) {
      subScore += 6
    }

    totalScore += subScore
  }

  return totalScore 
}

// console.log(day2(example))

// console.log(day2(input))

// part 2

// X = loss, Y = tie, Z = win
// rock = 1, paper = 2, scossors = 3

function part2(input) {
  const useRock = ["A Y", "B X", "C Z"]
  const usePaper = ["A Z", "B Y", "C X"]
  const useScissor = ["A X", "B Z", "C Y"]
  
  totalScore = 0

  for (let i = 0; i < input.length; i++) {
    subScore = 0
    if (input[i].includes("X")) {
      // loss
      subScore += 0
    } else if (input[i].includes("Y")) {
      // tie
      subScore += 3
    } else if (input[i].includes("Z")) {
      // win
      subScore += 6
    }

    if (useRock.includes(input[i])) {
      subScore += 1
    } else if (usePaper.includes(input[i])) {
      subScore += 2
    } else if (useScissor.includes(input[i])) {
      subScore += 3
    }

    // console.log(subScore)
    totalScore += subScore
  }

  return totalScore 
}

console.log(part2(example))
console.log(part2(input))