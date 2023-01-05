const { readFileSync} = require("node:fs")

const example = readFileSync("example.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters

const input = readFileSync("input.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters

function parseInput(input) {
  // split stack info from moves and split each by line w/ map
  const [rawStacks, rawMoves] = input.split("\n\n").map(line => line.split("\n"))
  
  let stacksArr = rawStacks
    // split rawStacks by each line and filter out all extraneous spaces and brackets
    .map(line => [ ...line ].filter((val, ind) => ind % 4 === 1))
  
  // get indexes from each column
  const indexs = stacksArr.pop()
  
  // build each array of columns for each index
  const stacks = {}

  for (let row of stacksArr) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] !== " ") {
        // add row[i] to the stack indexs[i]
        if (!stacks[indexs[i]]) {
          //create index column if not in stacks yet
          stacks[indexs[i]] = []
        }
        // add row[i] to beginning to make easier for last in first out (a stack)
        stacks[indexs[i]].unshift(row[i])
      } 
    }
  }
  
  // get info from moves
  const moves = []
  for (const move of rawMoves) {
    // execute a search on move using given regex to take just the numbers, gives search results
    const match = /move (\d+) from (\d+) to (\d+)/g.exec(move)
    // grab needed info from search results, give back as an object
    moves.push({
      amount: parseInt(match[1]), // how many boxes to move
      from: parseInt(match[2]), // where the boxes start
      to: parseInt(match[3]), // where the boxes finish
    })
  }

  return [stacks, moves]
}

const parsedExample = parseInput(example)
const parsedInput = parseInput(input)

// go through all the moves to move the boxes
function playMove([stacks, moves]) {
  //make deep copy of stacks
  const localStacks = JSON.parse(JSON.stringify(stacks))
  for (const move of moves) {
    
  }

}


// give boxes at top of each stack
function day5part1([stacks, moves]) {
  const topOfStack = []


  return topOfStack
}

console.log(day5part1(parsedExample))