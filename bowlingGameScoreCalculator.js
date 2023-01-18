function checkErrors(rolls) {
    if (!Array.isArray(rolls)) {
        throw new Error('Unsupported Input Type')
    }
    if (rolls.some(isNaN)) {
        throw new Error('Inputs must be numbers')
    }
    if (rolls.length < 12) {
        throw new Error("Invalid Game")
    }
}

function getBowlingScore(rolls) {

    checkErrors(rolls)

    let finalScore = 0
    let index = 0
    while (index < rolls.length - 1) {
        console.log(finalScore)
        if (rolls[index] === 10) {
            finalScore += 10 + rolls[index + 1] + rolls[index + 2]
            if (index >= 18 || finalScore === 300)
                break
            index++
            continue
        }

        let frameScore = rolls[index] + rolls[index + 1]
        if (frameScore == 10) {
            finalScore += 10 + rolls[index + 2]
        }
        if (frameScore < 10) {
            finalScore += frameScore
        }

        index += 2
    }
    return finalScore
}
//console.log(getBowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
module.exports = getBowlingScore
