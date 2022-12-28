const { readFileSync } = require("node:fs")

const example = readFileSync("example.txt", { encoding: "utf-8"})
.replace(/\r/g, "") // remove all \r characters
.trim() // remove starting and ending whitespace
.split("\n") // split on new line

console.log(example)

function day2(input) {
  
}