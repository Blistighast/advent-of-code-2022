const { readFileSync} = require('node:fs');

const example = readFileSync("example.txt", { encoding: "utf-8"})
  .replace(/\r/g, "") // remove all \r chracters
  .trim() // remove all start & end white space
  .split("\n") // split into list base on new line

const input = readFileSync("input.txt", { encoding: "utf-8"})
  .replace(/\r/g, "")
  .trim()
  .split("\n")


// part 1
function day3(input) {
  const valueList = []

  let priorityList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  
  // go through each pack
  for (let i = 0; i < input.length; i++) {
    // split each pack into both of its compartments
    let midIdx = input[i].length/2
    let firstHalf = input[i].slice(0, midIdx)
    let secondHalf = input[i].slice(midIdx)

    // compare each compartment to find the item in both
    for (let char of firstHalf) {
      if (secondHalf.includes(char)) {
        // convert item to priority value and save in list
        valueList.push(priorityList.indexOf(char) + 1)
        break
      }
    }
  }
  // console.log(valueList)

  // return total priority value
  return valueList.reduce((prev, curr) => prev + curr)
}

// console.log(day3(example))
// console.log(day3(input))

//part2
function day3part2(input) {
  const groupsSplit = []
  const valueList = []

  let priorityList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  // split list into groups of 3
  for (let i = 0; i < input.length; i += 3) {
    const group = input.slice(i, i + 3)
    groupsSplit.push(group)
  }

  // go through each group
  for (let group of groupsSplit) {
    const firstCompare = []
    const secondCompare = []
    //compare matching chars from first in group w/ second & first w/ third
    for (let char of group[0]) {
      if (group[1].includes(char)) {
        firstCompare.push(char)
      }
      if (group[2].includes(char)) {
        secondCompare.push(char)
      }
    }
    
    //compare both comparisons to see which is in both & push that chars value to valueList
    for (let char of firstCompare) {
      if (secondCompare.includes(char)) {
        valueList.push(priorityList.indexOf(char) + 1)
        break
      }
    }
    
  }

  // return summed priority value of item that was in all 3 members of group for all groups
  return valueList.reduce((prev, curr) => prev + curr)
}

console.log(day3part2(example))
console.log(day3part2(input))