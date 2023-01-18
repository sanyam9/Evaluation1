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
        if(rolls[index]===10){
            finalScore += 10 + rolls[index+1] + rolls[index+2]
        }
        
        let frameScore = rolls[index] + rolls[index+1]
        if(frameScore==10){
            finalScore+= 10 + rolls[index+2]
        }
        if(frameScore<10){
            finalScore += frameScore
        }
        
        index +=2
    }
    return finalScore
}
//console.log(getBowlingScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
module.exports = getBowlingScore
