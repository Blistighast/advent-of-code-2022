const day1 = require('./index.js')

const example = [1000, 2000, 3000, , 4000, , 5000, 6000, , 7000, 8000, 9000, , 10000]

test('day1 function exists', () => {
  expect(typeof day1).toEqual('function')
})

test('day1 inputs given example and returns 24000', () => {
  expect(day1(example)).toEqual(24000)
})