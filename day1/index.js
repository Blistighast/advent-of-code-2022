// import { readFileSync } from "node:fs";
const { readFileSync } = require("node:fs")


const elfList = readFileSync("example.txt", { encoding: "utf-8" }) //read text content
  .replace(/\r/g, "") // remove all \r characters
  .trim() // remove starting and ending whitespace
  .split("\n") // split on new line
  .map(Number) //parse each line into a number

const input = readFileSync("input.txt", { encoding: "utf-8" }) //read text content
  .replace(/\r/g, "") // remove all \r characters
  .trim() // remove starting and ending whitespace
  .split("\n") // split on new line
  .map(Number) //parse each line into a number

function day1(list) {
  const summedList = []
  let totalCal = 0;

  for(let i = 0; i <= list.length; i++) {
    if (list[i]) {
      totalCal = totalCal + list[i]
    } else {
      summedList.push(totalCal)
      totalCal = 0;
    }
  }

  // part 1, highest amount
  console.log(Math.max(...summedList))

  // part 2, top 3 highest amounts
  // sort list in descending order, take top 3 and sum them
  const sortedList = summedList.sort((a, b) => b - a)
  const top3 = sortedList.slice(0, 3)

  console.log(top3)
  console.log(top3.reduce((prev, curr) => prev + curr, 0))
}

day1(elfList)
day1(input)

module.exports = day1