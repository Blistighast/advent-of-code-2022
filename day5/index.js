const { readFileSync} = require("node:fs")

const example = readFileSync("example.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters

const input = readFileSync("input.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters

// format input to be readable for functions
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


// part 1
// give boxes at top of each stack after all moves have been done
function day5part1([stacks, moves]) { 
  const topOfStack = []

  //make deep copy of stacks so it doesnt accidentaly effect part 2
  const localStacks = JSON.parse(JSON.stringify(stacks))

// go through all the moves to move the boxes to appropriate stack, one box at a time
  for (const move of moves) {
    for (let i = 0; i < move.amount; i++) {
      //take box off top of given stack
      const box = localStacks[move.from].pop()
  
      //move box to stack it needs to go to and place on top
      localStacks[move.to].push(box)
    }
  }

  // read each box at the top of each stack after all moves have been done
  for (let stack in localStacks) {
    const topBox = localStacks[stack].slice(-1)[0]
    topOfStack.push(topBox)
  }

  // alternative way to read the top box on stacks
  // const topOfStack = indexs.map(value => {
  //   const stack = localStacks[value]
  //   return stack[stack.length - 1]
  // })

  //join them for proper format
  return topOfStack.join("")
}

console.log(day5part1(parsedExample))
console.log(day5part1(parsedInput))


// part 2
function day5part2([stacks, moves]) {
  const topOfStack = []

  //make copy of stacks to not effect anything else
  const localStacks = JSON.parse(JSON.stringify(stacks))

  // go through moves able to move multiple boxes at a time
  for (let move of moves) {
    // const boxesMoved = localStacks[move.from].splice(localStacks[move.from].length - move.amount) same thing but longer
    const boxesMoved = localStacks[move.from].splice(-move.amount)
    localStacks[move.to].push(...boxesMoved)
  }

  //read off boxes on top of stacks
  for (let stack in localStacks) {
    const topBox = localStacks[stack].slice(-1)[0]
    topOfStack.push(topBox)
  }

  //join them for proper format
  return topOfStack.join("")
}

console.log(day5part2(parsedExample))
console.log(day5part2(parsedInput))