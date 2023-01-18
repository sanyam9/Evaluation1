function getBowlingScore(rolls){
    if(!Array.isArray(rolls)){
        throw new Error('Unsupported Input Type')
    }
    if(rolls.some(isNaN)){
        throw new Error('Inputs must be')
    }
    if(rolls.length<20){
        throw new Error("Invalid Game")
    }
}