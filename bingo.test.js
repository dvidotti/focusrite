const { test, expect } = require("@jest/globals")
let checkBingo = require("./bingo")

let numbers = [22,13,17,11,0]
let card = [
    [22 ,13 ,17 ,11 , 0],
    [ 8 ,2, 23, 4, 24],
    [21 ,9, 14 ,16,  7],
    [6, 10,  3, 18,  5],
    [1,12,20, 15, 19]
]

test("Check bingo",  () => {
    // expect(checkBingo([],[])).toEqual(false)
    expect(checkBingo(numbers, card)).toEqual(true)
})