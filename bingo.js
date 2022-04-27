
function checkBingo(numbers, card) {
    // Fail fast if no numbers or card are provided
    if(numbers.length === 0 || card.length === 0) return false

    let isCardWinner= false
    
    function checkCombination(combination) {
        if(combination.every((number) => numbers.includes(number))) {
            isCardWinner = true;
        }
    }

    let i = 0;
    while (i < card.length && !isCardWinner) {
        // Checking row
        checkCombination(card[i])
        let column = card.map(item => item[i])
        checkCombination(column)
        i += 1
    }

    return isCardWinner;
}


function findWinnerCard(numbers, deckOfCards) {
    let result = false;
    let winnerCard = [];
    let numberCallList = []

    let i = 0
    while (winnerCard.length === 0 && i < numbers.length) {
        numberCallList.push(numbers[i])
        deckOfCards.forEach((card, idx) => {
            if(checkBingo(numberCallList,card)) {
                result = idx + 1
            }
        })
        i += 1
    }

    return result;
}


module.exports = { checkBingo, findWinnerCard }