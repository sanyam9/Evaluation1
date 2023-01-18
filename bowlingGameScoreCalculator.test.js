const getBowlingScore = require('./getBowlingScore')

describe('Bowling Game Score Calculator', ()=>{
    it('Should throw an error when the input array has less than 20 elements', ()=>{
        expect(()=> getBowlingScore([1,2,3]).toThrow("Invalid Game"))
    })

    it('Should throw an error when the input type is not an array',()=>{
        expect(()=> getBowlingScore('abc').toThrow('Unsupported Input Type'))
    })

    it('Should throw an error when the input array contains elements other than integrs',()=>{
        expect(()=> getBowlingScore([1,2,'a']).toThrow('Inputs must be numbers'))
    })

    it('Should return final score when 10 frames are given as input (no strikes or spares)',()=>{
        const result = getBowlingScore([3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6])
        expect(result).toBe(90)
    })
    it('Should return final score when 10 frames are given as input (no strikes or spares)',()=>{
        const result = getBowlingScore([[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
        expect(result).toBe(16)
    })
})