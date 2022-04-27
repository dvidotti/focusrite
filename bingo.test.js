const { test, expect , describe} = require("@jest/globals")
let {checkBingo, findWinnerCard} = require("./bingo.js")

let card = [
    [22 ,13 ,17 ,11 , 0],
    [ 8 ,2, 23, 4, 24],
    [21 ,9, 14 ,16,  7],
    [6, 10,  3, 18,  5],
    [1,12,20, 15, 19]
]

let deckOfCards = [
    [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16,  7],
        [6, 10 , 3, 18,  5],
        [1, 12,20, 15, 19]
    ],
    [
        [3, 15,  0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6]
    ],
    [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7]
    ]
]


describe("Check Winner Card", () => {
    describe("Should Win Bingo", () => {
        test("Should have a winning row",  () => {
            let numbers = [ 8,2,23,4,24]
            expect(checkBingo(numbers, card)).toEqual(true)
        })
        test("Should have a winning row",  () => {
            let numbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]
            expect(checkBingo(numbers, card)).toEqual(true)
        })
        test("Should have a winning column",  () => {
            let numbers = [ 0,24,7,5,19]
            expect(checkBingo(numbers, card)).toEqual(true)
        })
    })
    describe("Should Lose Bingo", () => {
        test("Should not find a winning row or column",  () => {
            let numbers = [ 0,4,7,5,19]
            expect(checkBingo(numbers, card)).toEqual(false)
        })
        test("Should not find a winning row or column",  () => {
            let numbers = [ 0,4,7,5,19, 28, 33, 44, 55, 66, 77, 88 ,99, 47, 57, 87 ]
            expect(checkBingo(numbers, card)).toEqual(false)
        })
    })
})


describe("Find Winner Card Test Suite", () => {
    describe("Should find a winner card", () => {
        test("Should return the first card on the list",  () => {
            let numbers = [22, 13, 17, 11, 0]
            expect(findWinnerCard(numbers, deckOfCards)).toEqual(1)
        })
        test("Should return the second card on the list",  () => {
            let numbers = [3,9,19,20,14]
            expect(findWinnerCard(numbers, deckOfCards)).toEqual(2)
        })
        test("Should return the third card on the list",  () => {
            let numbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]
            expect(findWinnerCard(numbers, deckOfCards)).toEqual(3)
        })
    })
    describe("Should't find the a winner card", () => {
        test("Should return false if any card is a winner",  () => {
            let numbers = [44,55,66,77,88]
            expect(findWinnerCard(numbers, deckOfCards)).toEqual(false)
        })
    })
})