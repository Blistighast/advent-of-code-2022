const { readFileSync} = require('node:fs');

const example = readFileSync("example.txt", { encoding: "utf-8"})
  .replace(/\r/g, "") // remove all \r chracters
  .trim() // remove all start & end white space
  .split("\n") // split into list base on new line

function map(str) {
  const mappedStr = {}

  for (let char of str) {
    mappedStr[char] ? mappedStr[char]++ : mappedStr[char] = 1 
  }

  return mappedStr
}


function day3(input) {
  const splitList = []

  let priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  
  for (let i = 0; i < input.length; i++) {
    let midIdx = input[i].length/2
    let firstHalf = input[i].slice(0, midIdx)
    let secondHalf = input[i].slice(midIdx)
    const firstMap = map(firstHalf)
    const secondMap = map(secondHalf)

    

    const iList = [firstHalf, secondHalf]
    splitList.push(iList)
  }

  return splitList
}

console.log(day3(example))