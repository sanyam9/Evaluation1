const { it } = require('node:test')
const { describe } = require('yargs')
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
})