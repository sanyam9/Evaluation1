function getBowlingScore(rolls){
    if(!Array.isArray(rolls)){
        throw new Error('Unsupported Input Type')
    }
    if(rolls.some(isNaN)){
        throw new Error('Inputs must be numbers')
    }
    if(rolls.length<20){
        throw new Error("Invalid Game")
    }

    let finalScore = 0
    let index = 0
    while(index<rolls.length-1){
        let frameScore = rolls[index] + rolls[index+1]
        
        if(frameScore<10){
            finalScore += frameScore
        }
        index+=2
    }
    return finalScore
}
//console.log(getBowlingScore([3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6]))
module.exports = getBowlingScore
